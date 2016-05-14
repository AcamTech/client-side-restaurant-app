import React, {PropTypes} from 'react';
import WaiterCarta from './waiter-carta';
import WaiterOrder from './waiter-order';

const WaiterPage = React.createClass({
  displayName: 'new-order-component',
  propTypes: {
    dishes: PropTypes.object,
    tables: PropTypes.array,
    selectedOrder: PropTypes.object,
    fetchDishes: PropTypes.func.isRequired,
    fetchTables: PropTypes.func.isRequired,
    restaurantId: PropTypes.string.isRequired,
    waiterId: PropTypes.string.isRequired,
    createOrder: PropTypes.func.isRequired
  },
  getInitialState(){
    return {
      order: this.getInitialOrder()
    };
  },
  componentDidMount(){
    this.props.fetchDishes(this.props.restaurantId);
    this.props.fetchTables(this.props.restaurantId);
  },
  getInitialOrder(){
    const selectedOrder = this.props.selectedOrder;
    const defaultOrder = {
      items: {},
      total: 0,
      table: ''
    };

    if (selectedOrder) {
      return Object.assign({}, selectedOrder);
    } else {
      return defaultOrder;
    }
  },
  getTotal(order) {
    var item, total = 0;

    for (var key in order.items) {
      item = order.items[key];
      total += (item.quantity * item.price || 0);
    }

    return total;
  },
  createItem(dishId) {
    var dish = this.props.dishes[dishId];

    return {
      dishId: dishId,
      quantity: 1,
      comment: '',
      name: dish.name,
      price: dish.price
    };
  },
  addToOrder(key){
    var order, existingItem;

    order = Object.assign({}, this.state.order);
    existingItem = order.items[key];

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      order.items[key] = this.createItem(key);
    }

    order.total = this.getTotal(order);
    this.setState({ order : order });
  },
  removeFromOrder(key){
    var order = Object.assign({}, this.state.order);
    var orderItem = order.items[key];

    if (orderItem.quantity > 1) {
      orderItem.quantity = orderItem.quantity - 1;
    } else {
      delete order.items[key];
    }

    order.total = this.getTotal(order);
    this.setState({ order : order });
  },
  setCommentToItem(key, comment) {
    var order = Object.assign({}, this.state.order);
    var orderItem = order.items[key];

    orderItem.comment = comment;

    this.setState({ order : order });
  },
  setTable(tableNumber) {
    var order = Object.assign({}, this.state.order);
    order.table = tableNumber;
    this.setState({ order : order });
  },
  createOrder() {
    if (!this.state.order.table) {
      alert('Por favor, seleccione una mesa');
    } else {
      var itemsQuantity = Object.keys(this.state.order.items).length;
      if (itemsQuantity < 1) {
        alert('Por favor, agregue al menos un plato');
      } else {
        this.props.createOrder(this.state.order, this.props.restaurantId, this.props.waiterId);
        this.setState(this.getInitialState());
      }
    }
  },
  render(){
    return (
      <div className="grid">
        <div className="grid__item medium--one-half">
          <div className="main-area">
            <WaiterCarta dishes={this.props.dishes} addToOrder={this.addToOrder} />
          </div>
        </div><div className="grid__item medium--one-half">
          <div className="main-area">
            <WaiterOrder tables={this.props.tables} order={this.state.order} removeFromOrder={this.removeFromOrder} setCommentToItem={this.setCommentToItem} setTable={this.setTable} createOrder={this.createOrder} />
          </div>
        </div>
      </div>
    );
  }
});

export default WaiterPage;

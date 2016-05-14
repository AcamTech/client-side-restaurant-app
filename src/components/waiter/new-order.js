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
    saveOrder: PropTypes.func.isRequired
  },
  getInitialState(){
    return {
      order: this.getInitialOrder(),
      tempIndex: 0
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
  findItemByDishId(dishId){
    const items = this.state.order.items;

    const coincidence = Object.keys(items)
      .map(id => (items[id]))
      .filter(item => {
        return item.dishId === dishId;
      })[0];

    return coincidence;
  },
  addToOrder(dishId){
    var order, existingItem, itemIndex;

    order = Object.assign({}, this.state.order);
    existingItem = this.findItemByDishId(dishId);
    itemIndex = this.state.tempIndex + 1;

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      order.items['_temp-' + itemIndex] = this.createItem(dishId);
    }

    order.total = this.getTotal(order);
    this.setState({ order : order, tempIndex : itemIndex});
  },
  removeFromOrder(id){
    var order = Object.assign({}, this.state.order);
    var item = order.items[id];

    if (item.quantity > 1) {
      item.quantity = item.quantity - 1;
    } else {
      delete order.items[id];
    }

    order.total = this.getTotal(order);
    this.setState({ order : order });
  },
  setCommentToItem(id, comment) {
    var order = Object.assign({}, this.state.order);
    var item = order.items[id];

    item.comment = comment;

    this.setState({ order : order });
  },
  setTable(tableNumber) {
    var order = Object.assign({}, this.state.order);
    order.table = tableNumber;
    this.setState({ order : order });
  },
  saveOrder() {
    if (!this.state.order.table) {
      alert('Por favor, seleccione una mesa');
    } else {
      var itemsQuantity = Object.keys(this.state.order.items).length;
      if (itemsQuantity < 1) {
        alert('Por favor, agregue al menos un plato');
      } else {
        this.props.saveOrder(this.state.order, this.props.restaurantId, this.props.waiterId);
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
            <WaiterOrder restaurantId={this.props.restaurantId} tables={this.props.tables} order={this.state.order} removeFromOrder={this.removeFromOrder} setCommentToItem={this.setCommentToItem} setTable={this.setTable} saveOrder={this.saveOrder} />
          </div>
        </div>
      </div>
    );
  }
});

export default WaiterPage;

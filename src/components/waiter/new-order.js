import React, {PropTypes} from 'react';
import WaiterCarta from './waiter-carta';
import WaiterOrder from './waiter-order';
import SampleDishes from 'sample/sample-dishes.js';

const WaiterPage = React.createClass({
  displayName: 'new-order-component',
  propTypes: {
    dishes: PropTypes.array,
    tables: PropTypes.array,
    fetchDishes: PropTypes.func.isRequired,
    fetchTables: PropTypes.func.isRequired,
    restaurantId: PropTypes.string.isRequired
  },
  getInitialState(){
    return {
      order: {
        items: {},
        total: 0,
        table: ''
      }
    };
  },
  componentDidMount(){
    this.props.fetchDishes(this.props.restaurantId);
    this.props.fetchTables(this.props.restaurantId);
  },
  getTotal(order) {
    var item, total = 0;

    for (var key in order.items) {
      item = order.items[key];
      total += (item.quantity * item.price || 0);
    }

    return total;
  },
  createItem(dishKey) {
    var dish = this.props.dishes[dishKey];

    return Object.assign({
      key: dishKey,
      quantity: 1,
      comment: ''
    }, dish);
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
  render(){
    return (
      <div className="grid">
        <div className="grid__item medium--one-half">
          <div className="main-area">
            <WaiterCarta dishes={this.props.dishes} addToOrder={this.addToOrder} />
          </div>
        </div><div className="grid__item medium--one-half">
          <div className="main-area">
            <WaiterOrder tables={this.props.tables} order={this.state.order} removeFromOrder={this.removeFromOrder} setCommentToItem={this.setCommentToItem} setTable={this.setTable} />
          </div>
        </div>
      </div>
    );
  }
});

export default WaiterPage;

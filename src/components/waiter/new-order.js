import React, {PropTypes} from 'react';
import WaiterCarta from 'components/waiter-carta';
import WaiterOrder from 'components/waiter-order';
import SampleDishes from 'sample/sample-dishes.js';

const WaiterPage = React.createClass({
  displayName: 'new-order-component',
  propTypes: {
    dishes: PropTypes.array,
    fetchDishes: PropTypes.func.isRequired,
    restaurantId: PropTypes.string.isRequired
  },
  getInitialState(){
    return {
      order: {}
    };
  },
  componentDidMount(){
    this.props.fetchDishes(this.props.restaurantId);
  },
  addToOrder(key){
    var order = Object.assign({}, this.state.order);
    order[key] = order[key] + 1 || 1;

    this.setState({ order : order });
  },
  removeFromOrder(key){
    var order = Object.assign({}, this.state.order);
    if (order[key] > 1) {
      order[key] = order[key] - 1;
    } else {
      delete order[key];
    }

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
            <WaiterOrder dishes={this.props.dishes} order={this.state.order} removeFromOrder={this.removeFromOrder} />
          </div>
        </div>
      </div>
    );
  }
});

export default WaiterPage;

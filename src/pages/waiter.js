import React from 'react';
import WaiterCarta from 'components/waiter-carta';
import WaiterOrder from 'components/waiter-order';
import SampleDishes from 'sample/sample-dishes.js';

const WaiterPage = React.createClass({
  getInitialState(){
    return {
      dishes: SampleDishes.dishes,
      order: {}
    };
  },
  addToOrder(key){
    this.state.order[key] = this.state.order[key] + 1 || 1;
    this.setState({ order : this.state.order });
  },
  removeFromOrder(key){
    if (this.state.order[key] > 1) {
      this.state.order[key] = this.state.order[key] - 1;
    } else {
      delete this.state.order[key];
    }

    this.setState({ order : this.state.order });
  },
  render(){
    return (
      <div className="grid">
        <div className="grid__item medium--one-half">
          <div className="main-area">
            <WaiterCarta dishes={this.state.dishes} addToOrder={this.addToOrder} />
          </div>
        </div><div className="grid__item medium--one-half">
          <div className="main-area">
            <WaiterOrder dishes={this.state.dishes} order={this.state.order} removeFromOrder={this.removeFromOrder} />
          </div>
        </div>
      </div>
    );
  }
});

export default WaiterPage;

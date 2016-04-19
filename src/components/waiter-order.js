import React from 'react';
import FormatHelpers from '../helpers/format-helpers';
import OrderItem from '../components/order-item';

const WaiterOrder = React.createClass({
  renderOrder(key){
    var dish = this.props.dishes[key];
    var count = this.props.order[key];

    return (
      <OrderItem key={key} index={key} dish={dish} count={count} removeFromOrder={this.props.removeFromOrder} />
    );
  },
  render(){
    var orderIds = Object.keys(this.props.order);

    var total = orderIds.reduce((prevTotal, key)=> {
      var dish = this.props.dishes[key];
      var count = this.props.order[key];

      return prevTotal + (count * dish.price || 0);
    }, 0);

    return (
      <article>
        <h1 className="delta weight--light">Orden</h1>
        <ul>
          {orderIds.map(this.renderOrder)}
        </ul>
        <p>Total: {FormatHelpers.formatPrice(total)}</p>
      </article>
    );
  }
});

export default WaiterOrder;

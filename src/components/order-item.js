import React from 'react';
import FormatHelpers from '../helpers/format-helpers';

const OrderItem = React.createClass({
  onButtonClick(){
    console.log("Going to remove dish: " + this.props.index);
    this.props.removeFromOrder(this.props.index);
  },
  render(){
    var dish = this.props.dish;
    var count = this.props.count;

    return (
      <li>
        {dish.name} <span>x{count}</span> {FormatHelpers.formatPrice(dish.price * count)}
        <button onClick={this.onButtonClick}>Remover</button>
      </li>
    );
  }
});

export default OrderItem;

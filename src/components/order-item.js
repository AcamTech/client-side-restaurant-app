import React, {PropTypes} from 'react';
import FormatHelpers from '../helpers/format-helpers';

const OrderItem = React.createClass({
  propTypes: {
    removeFromOrder: PropTypes.func.isRequired,
    index: PropTypes.string,
    dish: PropTypes.object,
    count: PropTypes.number
  },
  onButtonClick(){
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

import React, {PropTypes} from 'react';
import FormatHelpers from 'helpers/format-helpers';

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
        <div className="split">
          <span className="split__title">
            {dish.name} <span>x{count}</span> <button style={{border: 'none', background: 'transparent'}} onClick={this.onButtonClick}>&times;</button>
          </span>
           {FormatHelpers.formatPrice(dish.price * count)}
        </div>
      </li>
    );
  }
});

export default OrderItem;

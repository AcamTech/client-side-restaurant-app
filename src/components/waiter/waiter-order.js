import React, {PropTypes} from 'react';
import FormatHelpers from 'helpers/format-helpers';
import OrderItem from './order-item';

const WaiterOrder = React.createClass({
  propTypes: {
    removeFromOrder: PropTypes.func.isRequired,
    dishes: PropTypes.array,
    order: PropTypes.object
  },
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
        <ul className="list-unstyled">
          {orderIds.map(this.renderOrder)}
        </ul>
        <p className="epsilon text--end split">
        <span className="split__title">
          Total:
        </span>
        {FormatHelpers.formatPrice(total)}</p>
      </article>
    );
  }
});

export default WaiterOrder;

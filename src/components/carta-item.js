import React, {PropTypes} from 'react';
import FormatHelpers from '../helpers/format-helpers';

const CartaItem = React.createClass({
  propTypes: {
    addToOrder: PropTypes.func.isRequired,
    index: PropTypes.string,
    details: PropTypes.object
  },
  onButtonClick(){
    this.props.addToOrder(this.props.index);
  },
  render(){
    var details = this.props.details;
    return (
      <li className="carta-item">
        <article>
          <h1 className="carta-item__name">{details.name}</h1>
          <p>{details.description}</p>
          <p>Precio: {FormatHelpers.formatPrice(details.price)}</p>
          <button className="button button--secondary button--block button--small" onClick={this.onButtonClick}>Agregar</button>
        </article>
      </li>
    );
  }
});

export default CartaItem;

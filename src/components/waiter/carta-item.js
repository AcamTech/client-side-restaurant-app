import React, {PropTypes} from 'react';
import FormatHelpers from 'helpers/format-helpers';

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
        <article className="clearfix">
          <div className="media clearfix push-half--bottom">
            <div className="media__img">
              <img src="http://dummyimage.com/180x4:3/F5F5F5/000000.gif&text=No+Disponible" alt=""/>
            </div>
            <div className="media__body">
              <h1 className="carta-item__name flush--bottom">{details.name}</h1>
              <p className="flush--bottom text--small">{FormatHelpers.formatPrice(details.price)}</p>
              <p>{details.description}</p>
            </div>
          </div>
          <div className="text--end">
            <button className="button button-border button--extra-small" onClick={this.onButtonClick}>Agregar</button>
          </div>
        </article>
      </li>
    );
  }
});

export default CartaItem;

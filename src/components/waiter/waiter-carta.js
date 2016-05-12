import React, {PropTypes} from 'react';
import CartaItem  from './carta-item';

const WaiterCarta = React.createClass({
  propTypes: {
    addToOrder: PropTypes.func.isRequired,
    dishes: PropTypes.object
  },
  renderDish(key){
    return (
      <CartaItem key={key} index={key} details={this.props.dishes[key]} addToOrder={this.props.addToOrder} />
    );
  },
  render(){
    return (
      <section>
        <h1 className="delta weight--light">Carta</h1>
        <ul className="carta">
          {Object.keys(this.props.dishes).map(this.renderDish)}
        </ul>
      </section>
    );
  }
});

export default WaiterCarta;

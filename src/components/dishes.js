import React, {createClass} from 'react';
import Modal from './modal/';
import FilterHeader from './filter-header';
import RestaurantDishesList from './restaurant-dishes-list';
import RegisterDishModal from './register-dish-modal';

const Dishes = createClass({
  render(){
    return (
      <div>
        <FilterHeader title="Platos">
          <a href="#" onClick={this.openModal} className="button button--secondary button--block button--small simple-modal">Registrar Plato</a>
        </FilterHeader>
        <RestaurantDishesList />
        <RegisterDishModal />
      </div>
    );
  }
});

export default Dishes;

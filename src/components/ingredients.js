import React, {createClass} from 'react';
import Modal from './modal/';
import FilterHeader from './filter-header';
import RestaurantIngredientsList from './restaurant-ingredients-list';
import RegisterIngredientModal from './register-ingredient-modal';

const Ingredients = createClass({
  render(){
    return (
      <div>
        <FilterHeader title="Ingredientes">
          <a href="#" onClick={this.openModal} className="button button--secondary button--block button--small simple-modal">Registrar Ingrediente</a>
        </FilterHeader>
        <RestaurantIngredientsList />
        <RegisterIngredientModal />
      </div>
    );
  }
});

export default Ingredients;

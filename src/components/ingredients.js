import React, {createClass} from 'react';
import Modal from './modal/';
import FilterHeader from './filter-header';
import RestaurantIngredientsList from './restaurant-ingredients-list';
import RegisterIngredientModal from './register-ingredient-modal';
import ModalMixin from './modal-mixin'; //remove when implement redux

const Ingredients = createClass({
  mixins: [ModalMixin],
  render(){
    return (
      <div>
        <FilterHeader title="Ingredientes">
          <a href="#" onClick={this.openModal} className="button button--secondary button--block button--small simple-modal">Registrar Ingrediente</a>
        </FilterHeader>
        <RestaurantIngredientsList />
        <Modal
            open={this.state.isModalOpen}
            onClose={this.closeModal}
            className="panel--medium">
            <RegisterIngredientModal />
        </Modal>
      </div>
    );
  }
});

export default Ingredients;

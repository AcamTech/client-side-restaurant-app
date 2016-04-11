import React, {createClass} from 'react';
import Modal from 'react-modal';
import FilterHeader from './filter-header';
import RestaurantIngredientsList from './restaurant-ingredients-list';
import RegisterIngredientModal from './register-ingredient-modal';
import ModalContainer from '../components/modal-container';
import ModalMixin from './modal-mixin'; //remove when implement redux
import {MODAL_STYLES} from '../constants/';

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
            isOpen={this.state.isModalOpen}
            onRequestClose={this.closeModal}
            style={MODAL_STYLES}>
          <ModalContainer
            closeModal={this.closeModal}>
            <RegisterIngredientModal />
          </ModalContainer>
        </Modal>
      </div>
    );
  }
});

export default Ingredients;
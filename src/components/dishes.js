import React, {createClass} from 'react';
import Modal from 'react-modal';
import FilterHeader from './filter-header';
import RestaurantDishesList from './restaurant-dishes-list';
import RegisterDishModal from './register-dish-modal';
import ModalContainer from '../components/modal-container';
import ModalMixin from './modal-mixin'; //remove when implement redux
import {MODAL_STYLES} from '../constants/';

const Dishes = createClass({
  mixins: [ModalMixin],
  render(){
    return (
      <div>
        <FilterHeader title="Platos">
          <a href="#" onClick={this.openModal} className="button button--secondary button--block button--small simple-modal">Registrar Plato</a>
        </FilterHeader>
        <RestaurantDishesList />
        <Modal
            isOpen={this.state.isModalOpen}
            onRequestClose={this.closeModal}
            style={MODAL_STYLES}>
          <ModalContainer
            closeModal={this.closeModal}>
            <RegisterDishModal />
          </ModalContainer>
        </Modal>
      </div>
    );
  }
});

export default Dishes;
import React, {createClass} from 'react';
import Modal from './modal';
import FilterHeader from './filter-header';
import RestaurantDishesList from './restaurant-dishes-list';
import RegisterDishModal from './register-dish-modal';
import ModalMixin from './modal-mixin'; //remove when implement redux

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
            open={this.state.isModalOpen}
            onClose={this.closeModal}
            className="panel--medium">
            <RegisterDishModal />
        </Modal>
      </div>
    );
  }
});

export default Dishes;

import React, {createClass} from 'react';
import Modal from './modal';
import FilterHeader from './filter-header';
import RestaurantCategoriesList from './restaurant-categories-list';
import RegisterCategoryModal from './register-category-modal';
import ModalContainer from '../components/modal-container';
import ModalMixin from './modal-mixin'; //remove when implement redux
import {MODAL_STYLES} from '../constants/';

const Categories = createClass({
  mixins: [ModalMixin],
  render(){
    return (
      <div>
        <FilterHeader title="Categorías">
          <a href="#" onClick={this.openModal} className="button button--secondary button--block button--small simple-modal">Registrar Categoría</a>
        </FilterHeader>
        <RestaurantCategoriesList />
        <Modal
            open={this.state.isModalOpen}
            onClose={this.closeModal}
            className="panel--medium">
            <RegisterCategoryModal />
        </Modal>
      </div>
    );
  }
});

export default Categories;

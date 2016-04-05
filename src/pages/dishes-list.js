import React, {createClass, PropTypes} from 'react';
import RestaurantDishesList from '../components/restaurant-dishes-list';
import RestaurantIngredientsList from '../components/restaurant-ingredients-list';
import Modal from 'react-modal';
import ModalContainer from '../components/modal-container';
import RegisterDishModal from '../components/register-dish-modal';
import RegisterIngredientModal from '../components/register-ingredient-modal';
import ModalMixin from '../components/modal-mixin'; //remove when implement redux
import {MODAL_STYLES} from '../constants/';

const DishesList = createClass({
  displayName: 'Dishes-list',
  mixins: [ModalMixin],
  render(){
    return(
      <div>
        <div className="grid grid--middle push--bottom">
          <div className="grid__item medium--one-eighth">
            <h1 className="delta flush weight--light">Platos</h1>
          </div><div className="grid__item medium--seven-eighths">
            <div className="grid">
              <div className="grid__item medium--one-quarter">
                <form action="" className="form-inline">
                  <div className="form-group has-feedback has-feedback--reverse">
                    <input className="form-control form-control-material input--small" placeholder="Buscar Plato" type="text" />
                    <span className="form-control-feedback icon-search icon-lg"></span>
                  </div>
                </form>
              </div><div className="grid__item medium--three-quarters text--end">
                <div className="grid">
                    <div className="grid__item medium--one-quarter">
                        <a href="#" onClick={this.openModal} className="button button--secondary button--block button--small simple-modal">Registrar Plato</a>
                    </div><div className="grid__item medium--one-quarter">
                        <a href="#" onClick={this.openModal} className="button button--secondary button--block button--small">Ingredientes</a>
                    </div><div className="grid__item medium--one-quarter">
                        <a href="#" onClick={this.openModal} className="button button--secondary button--block button--small">Categorías</a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default DishesList;
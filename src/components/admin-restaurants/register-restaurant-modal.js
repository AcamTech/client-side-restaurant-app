import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { RestaurantForm } from 'containers/restaurant-form';
import Modal from 'components/modal/';

export default class RegisterRestaurantModal extends Component {
  static displayName = 'register-restaurant-modal';
  static propTypes = {
    isOpen: PropTypes.bool,
    openCreateRestaurantModal: PropTypes.func.isRequired,
    closeCreateRestaurantModal: PropTypes.func.isRequired
  };
  clearFormAndCloseModal() {
    var { closeCreateRestaurantModal } = this.props;
    closeCreateRestaurantModal();
  }
  render() {
    var {
      openCreateRestaurantModal,
      closeCreateRestaurantModal,
      isOpen
    } = this.props;
    return (
      <button
        onClick={openCreateRestaurantModal}
        className="button button--primary"
      >
        {'Registrar Restaurante'}
        <Modal isOpen={isOpen} onCloseHandler={closeCreateRestaurantModal}>
          <article
            id="new-restaurant"
            className="panel panel--full-space panel--medium mfp-with-anim"
            style={{ clear: 'both' }}
          >
            <div className="panel__head">
              <h1 className="popup__title delta flush">Nuevo Restaurante</h1>
            </div>
            <RestaurantForm
              onAfterSubmitHandler={closeCreateRestaurantModal}
              onCancelClick={closeCreateRestaurantModal}
            />
          </article>
        </Modal>
      </button>
    );
  }
}

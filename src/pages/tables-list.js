import React, {createClass, PropTypes} from 'react';
import RestaurantTablesList from '../components/restaurant-tables-list';
import Modal from 'react-modal';
import ModalContainer from '../components/modal-container';
import RegisterTableModal from '../components/register-table-modal';
import ModalMixin from '../components/modal-mixin'; //remove when implement redux
import {MODAL_STYLES} from '../constants/';

const TablesList = createClass({
  displayName: 'Tables-list',
  mixins: [ModalMixin],
  render(){
    return(
      <div>
        <div className="grid grid--middle push--bottom">
          <div className="grid__item medium--one-eighth">
            <h1 className="delta flush weight--light">Mesas</h1>
          </div><div className="grid__item medium--seven-eighths">
            <div className="grid">
              <div className="grid__item medium--one-half">
                <form action="" className="form-inline">
                  <div className="form-group has-feedback has-feedback--reverse">
                    <input className="form-control form-control-material input--small" placeholder="Buscar Mesa" type="text" />
                    <span className="form-control-feedback icon-search icon-lg"></span>
                  </div>
                </form>
              </div><div className="grid__item medium--one-half text--end">
                <a href="#" onClick={this.openModal} className="button button--secondary button--wide button--small simple-modal">Registrar Mesa</a>
              </div>
            </div>
          </div>
        </div>
        <RestaurantTablesList />
        <Modal
            isOpen={this.state.isModalOpen}
            onRequestClose={this.closeModal}
            style={MODAL_STYLES}>
          <ModalContainer
            closeModal={this.closeModal}>
            <RegisterTableModal />
          </ModalContainer>
        </Modal>
      </div>
    );
  }
});

export default TablesList;
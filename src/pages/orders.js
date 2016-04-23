import React, {createClass, PropTypes} from 'react';
import RestaurantOrdersList from '../components/restaurant-orders-list';
import Modal from 'react-modal';
import ModalMixin from '../components/modal-mixin'; //remove when implement redux
import {MODAL_STYLES} from '../constants/';

const OrdersList = createClass({
  displayName: 'Orders-list',
  mixins: [ModalMixin],
  render(){
    return(
      <div>
        <div className="grid grid--middle push--bottom">
          <div className="grid__item medium--one-quarter">
            <h1 className="delta flush weight--light">Reporte de órdenes</h1>
          </div><div className="grid__item medium--three-quarters">
            <div className="grid">
              <div className="grid__item medium--one-half">
                <form action="" className="form-inline">
                  <div className="form-group has-feedback has-feedback--reverse">
                    <input className="form-control form-control-material input--small" placeholder="Buscar Orden" type="text" />
                    <span className="form-control-feedback icon-search icon-lg"></span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <RestaurantOrdersList />
      </div>
    );
  }
});

export default OrdersList;

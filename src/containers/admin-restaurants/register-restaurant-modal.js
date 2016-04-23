import React, {createClass} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {addRestaurant} from 'src/actions/restaurants';
import {closeCreateRestaurantModal} from 'src/actions/create-restaurant-modal';
import Modal from 'src/components/modal';
import RegisterRestaurantModalComponent from 'src/components/admin-restaurants/register-restaurant-modal';
import createRestaurantValidations from './create-restaurant-form-validations';


const RegisterRestaurantModal = createClass({
  render() {
    return (
      <Modal
        open={this.props.isOpen}
        onClose={this.props.closeCreateRestaurantModal}
        className="panel--medium">
        <RegisterRestaurantModalComponent {...this.props} />
      </Modal>
    );
  }
});

function mapStateToProps(state){
  return {
    isOpen: state.createRestaurantModal.isOpen
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addRestaurant,
    closeCreateRestaurantModal
  }, dispatch);
}

export default reduxForm({
  form: 'createRestaurantForm',
  fields: ['name', 'address', 'phone'],
  validate: createRestaurantValidations
}, mapStateToProps, mapDispatchToProps)(RegisterRestaurantModal);

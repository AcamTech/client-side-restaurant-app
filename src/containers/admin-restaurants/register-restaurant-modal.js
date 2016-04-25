import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {registerRestaurant} from 'actions/restaurants';
import {closeCreateRestaurantModal, openCreateRestaurantModal} from 'actions/create-restaurant-modal';
import RegisterRestaurantModalComponent from 'components/admin-restaurants/register-restaurant-modal';
import createRestaurantValidations from './create-restaurant-form-validations';

function mapStateToProps(state){
  return {
    isOpen: state.createRestaurantModal.isOpen
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    registerRestaurant,
    closeCreateRestaurantModal,
    openCreateRestaurantModal
  }, dispatch);
}

export default reduxForm({
  form: 'createRestaurantForm',
  fields: ['name', 'address', 'phone'],
  validate: createRestaurantValidations
}, mapStateToProps, mapDispatchToProps)(RegisterRestaurantModalComponent);

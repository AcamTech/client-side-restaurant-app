import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {registerRestaurant, updateRestaurantAction} from 'actions/restaurants';
import {RestaurantForm} from 'components/restaurant-form';
import restaurantFormValidations from './restaurant-form-validations';

function mapStateToProps(state){
  return {
    initialValues: Object.assign({}, {cellPhone: ''}, state.entities.restaurants[state.restaurantShow.restaurant] || {})
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    registerRestaurant,
    updateRestaurantAction
  }, dispatch);
}

export default reduxForm({
  form: 'createRestaurantForm',
  fields: ['id', 'name', 'address', 'phone', 'cellPhone', 'city'],
  validate: restaurantFormValidations
}, mapStateToProps, mapDispatchToProps)(RestaurantForm);

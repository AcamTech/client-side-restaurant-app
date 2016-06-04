import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { DishesModal } from 'components/restaurant';
import { fetchCategories } from 'actions/categories';
import { fetchIngredients } from 'actions/ingredients';
import { addOrEditDish } from 'actions/dishes';
import { closeDishesModal, openDishesModal } from 'actions/dishes-modal';
import addDishesValidations from './add-dishes-validations';

function mapStateToProps (state, props) {
  var categories = state.categories.list.map(category => state.entities.categories[category]) || [];
  var ingredients = state.ingredients.list.map(ingredient => state.entities.ingredients[ingredient]) || [];
  return {
    isOpen: state.dishesModal.isOpen,
    isEditting: state.dishesModal.isEditting,
    initialValues: state.dishesModal.selectedDish,
    categories,
    ingredients,
    restaurantId: props.restaurantId
  };
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators({ addOrEditDish, fetchCategories, fetchIngredients, closeDishesModal, openDishesModal } , dispatch);
}

export default reduxForm({
  form: 'addDishForm',
  validate: addDishesValidations,
  fields: ['name', 'id', 'description', 'price', 'category', 'ingredients']
}, mapStateToProps, mapDispatchToProps)(DishesModal);

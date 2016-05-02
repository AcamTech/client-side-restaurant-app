import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { DishesModal } from 'components/restaurant';
import { fetchCategories } from 'actions/categories';
import { fetchIngredients } from 'actions/ingredients';
import { addOrEditDish } from 'actions/dishes';
import { closeDishesModal, openDishesModal } from 'actions/dishes-modal';
import { objectToArray } from 'helpers/format-helpers';

function mapStateToProps (state, props) {
  return {
    isOpen: state.dishesModal.isOpen,
    isEditting: state.dishesModal.isEditting,
    initialValues: state.dishesModal.selectedDish,
    categories: objectToArray(state.categories.list || {}),
    ingredients: objectToArray(state.ingredients.list || {}),
    restaurantId: props.restaurantId
  };
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators({ addOrEditDish, fetchCategories, fetchIngredients, closeDishesModal, openDishesModal } , dispatch);
}

export default reduxForm({
  form: 'addDishForm',
  fields: ['name', 'id', 'description', 'price', 'category', 'ingredients']
}, mapStateToProps, mapDispatchToProps)(DishesModal);

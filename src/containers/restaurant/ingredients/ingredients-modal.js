import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {reduxForm} from 'redux-form';
import { IngredientsModal } from 'components/restaurant';
import { addOrEditIngredient } from 'actions/ingredients';
import { closeIngredientsModal, openIngredientsModal } from 'actions/ingredients-modal';

function mapStateToProps (state, props) {
  return {
    isOpen: state.ingredientsModal.isOpen,
    isEditting: state.ingredientsModal.isEditting,
    initialValues: state.ingredientsModal.selectedIngredient
  };
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators({ addOrEditIngredient, closeIngredientsModal, openIngredientsModal } , dispatch);
}

export default reduxForm({
  form: 'addIngredientForm',
  fields: ['name', 'id']
}, mapStateToProps, mapDispatchToProps)(IngredientsModal);

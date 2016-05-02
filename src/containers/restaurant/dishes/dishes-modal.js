import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {reduxForm} from 'redux-form';
import { DishesModal } from 'components/restaurant';
import { addOrEditDish } from 'actions/dishes';
import { closeDishesModal, openDishesModal } from 'actions/dishes-modal';

function mapStateToProps (state, props) {
  return {
    isOpen: state.dishesModal.isOpen,
    isEditting: state.dishesModal.isEditting,
    initialValues: state.dishesModal.selectedDish
  };
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators({ addOrEditDish, closeDishesModal, openDishesModal } , dispatch);
}

export default reduxForm({
  form: 'addDishForm',
  fields: ['name', 'id', 'description', 'price']
}, mapStateToProps, mapDispatchToProps)(DishesModal);

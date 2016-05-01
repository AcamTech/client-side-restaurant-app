import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {addOrEditCategory} from 'actions/categories';
import {closeCategoriesModal, openCategoriesModal} from 'actions/categories-modal';
import {CategoriesModal} from 'components/restaurant';
import addCategoryValidations from './add-category-validations';

function mapStateToProps(state, props){
  return {
    isOpen: state.categoriesModal.isOpen,
    isEditting: state.categoriesModal.isEditting,
    restaurantId: props.restaurantId,
    initialValues: state.categoriesModal.selectedCategory
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addOrEditCategory,
    closeCategoriesModal,
    openCategoriesModal
  }, dispatch);
}

export default reduxForm({
  form: 'addCategoryForm',
  validate: addCategoryValidations,
  fields: ['name', 'id']
}, mapStateToProps, mapDispatchToProps)(CategoriesModal);

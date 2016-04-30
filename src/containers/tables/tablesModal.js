import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {addOrEditTable} from 'actions/tables';
import {closeTablesModal, openTablesModal} from 'actions/tables-modal';
import TablesModal from 'components/tables/tables-modal';
import addTableValidations from './add-table-validations';

function mapStateToProps(state, props){
  return {
    isOpen: state.tablesModal.isOpen,
    isEditting: state.tablesModal.isEditting,
    restaurantId: props.restaurantId,
    initialValues: state.tablesModal.selectedTable
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addOrEditTable,
    closeTablesModal,
    openTablesModal
  }, dispatch);
}

export default reduxForm({
  form: 'addTableForm',
  validate: addTableValidations,
  fields: ['number']
}, mapStateToProps, mapDispatchToProps)(TablesModal);

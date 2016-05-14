import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {addOrEditStaffMember} from 'actions/staff';
import {closeStaffModal, openStaffModal} from 'actions/staff-modal';
import { StaffModal } from 'components/restaurant';
import addStaffMemberValidations from './add-staff-member-validations';

function mapStateToProps(state, props){
  return {
    isOpen: state.staffModal.isOpen,
    isEditting: state.staffModal.isEditting,
    restaurantId: props.restaurantId,
    initialValues: state.staffModal.selectedMember
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addOrEditStaffMember,
    closeStaffModal,
    openStaffModal
  }, dispatch);
}

export default reduxForm({
  form: 'addStaffMemberForm',
  validate: addStaffMemberValidations,
  fields: ['name', 'email', 'uid']
}, mapStateToProps, mapDispatchToProps)(StaffModal);

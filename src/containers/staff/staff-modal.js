import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {addStaffMember} from 'actions/staff';
import {closeStaffModal, openStaffModal} from 'actions/staff-modal';
import StaffModal from 'components/staff/staff-modal';
import addStaffMemberValidations from './add-staff-member-validations';

function mapStateToProps(state){
  return {
    isOpen: state.StaffModal.isOpen
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addStaffMember,
    closeStaffModal,
    openStaffModal
  }, dispatch);
}

export default reduxForm({
  form: 'addStaffMemberForm',
  fields: ['name', 'role', 'email'],
  validate: addStaffMemberValidations
}, mapStateToProps, mapDispatchToProps)(StaffModal);

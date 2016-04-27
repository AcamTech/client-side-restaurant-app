import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {addStaffMember} from 'actions/staff';
import {closeStaffModal, openStaffModal} from 'actions/staff-modal';
import StaffModal from 'components/staff/staff-modal';
import addStaffMemberValidations from './add-staff-member-validations';

function mapStateToProps(state, props){
  return {
    isOpen: state.staffModal.isOpen,
    restaurantId: props.restaurantId
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
  fields: ['name', 'email'],
  validate: addStaffMemberValidations
}, mapStateToProps, mapDispatchToProps)(StaffModal);

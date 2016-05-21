import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { changePasswordAction } from 'actions/auth';
import { ChangePassword } from 'components/change-password';
import changePasswordValidations from './change-password-validations';

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators( {changePasswordAction} , dispatch);
}

export default reduxForm({
  form: 'addStaffMemberForm',
  validate: changePasswordValidations,
  fields: ['email', 'oldPassword', 'newPassword']
}, null, mapDispatchToProps)(ChangePassword);

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { resetPassword } from 'actions/auth';
import { ResetPassword } from 'components/reset-password';
import resetPasswordValidations from './reset-password-validations';

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators( {resetPassword} , dispatch);
}

export default reduxForm({
  form: 'addStaffMemberForm',
  validate: resetPasswordValidations,
  fields: ['email']
}, null, mapDispatchToProps)(ResetPassword);

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {reduxForm} from 'redux-form';
import {authenticateUser } from 'actions/auth';
import { Login } from 'components/login';
import loginFormValidations from './login-validations';

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators( { authenticateUser } , dispatch);
}

export default reduxForm({
  form: 'loginForm',
  validate: loginFormValidations,
  fields: ['email', 'password']
}, null, mapDispatchToProps)(Login);


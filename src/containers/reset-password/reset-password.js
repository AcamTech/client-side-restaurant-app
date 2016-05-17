import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { resetPassword } from 'actions/auth';
import { ResetPassword } from 'components/reset-password';

function mapStateToProps (state, props) {
  return {
  };
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators( {resetPassword} , dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPassword);

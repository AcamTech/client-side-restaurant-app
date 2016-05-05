import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changePasswordAction } from 'actions/staff';
import { ResetPassword } from 'components/reset-password';

function mapStateToProps (state, props) {
  return {
  };
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators( {changePasswordAction} , dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPassword);

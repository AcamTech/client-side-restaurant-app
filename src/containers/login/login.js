import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {authenticateUser } from 'actions/staff';
import { Login } from 'components/login';

function mapStateToProps (state, props) {
  return {
  };
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators( { authenticateUser } , dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

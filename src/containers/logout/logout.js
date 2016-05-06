import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { unauth } from 'actions/staff';
import { Logout } from 'components/logout';

function mapStateToProps (state, props) {
  return {
  };
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators( {unauth} , dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);

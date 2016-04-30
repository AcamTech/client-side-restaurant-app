import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TablesModal } from 'components/tables';

function mapStateToProps (state, props) {
  return {

  };
}

// function mapDispatchToProps (dispatch, props) {
//   return bindActionCreators( , dispatch)
// }

export default connect(
  mapStateToProps,
  null
)(TablesModal);
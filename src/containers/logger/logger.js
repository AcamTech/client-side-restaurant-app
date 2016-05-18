import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { closeLogger } from 'actions/logger';
import { Logger } from 'components/Logger';

function mapStateToProps (state, props) {
  return {
    messages: state.logger.messages,
    isOpen: state.logger.isOpen,
    type: state.logger.type
  };
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators( {closeLogger} , dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logger);

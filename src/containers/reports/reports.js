import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Reports } from 'components/reports';

function mapStateToProps(state, props){
  return {
    orders: state.entities.orders
  };
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators( {} , dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reports);

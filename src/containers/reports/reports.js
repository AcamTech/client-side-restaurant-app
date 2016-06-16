import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Reports } from 'components/reports';
import {fetchStaff, removeStaffMember} from 'actions/staff';

function mapStateToProps(state, props){
  return {
    orders: state.entities.orders,
    staff: state.entities.staff,
    restaurantId: props.restaurantId
  };
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators( {fetchStaff} , dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reports);

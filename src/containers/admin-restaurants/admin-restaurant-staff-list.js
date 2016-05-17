import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchStaff, addOrEditAdmin} from 'actions/staff';
import AdminRestaurantStaffList from 'components/admin-restaurants/restaurant-staff-list';

function bindStateToProps(state, props){
  var staff = state.staff.list.map((id) => (state.entities.staff[id]));

  return {
    staff: staff
  };
}

function bindDispatchToProps(dispatch){
  return bindActionCreators({ fetchStaff, addOrEditAdmin }, dispatch);
}

export default connect(
  bindStateToProps,
  bindDispatchToProps
)(AdminRestaurantStaffList);
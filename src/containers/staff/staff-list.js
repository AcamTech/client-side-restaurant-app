import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchStaff} from 'actions/staff';
import StaffList from 'components/staff/staff-list';

function mapStateToProps(state, props){
  return {
    staff: state.staff.list,
    restaurantId: props.restaurantId
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchStaff}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StaffList);

import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchStaff, removeStaffMember} from 'actions/staff';
import {editStaffMember} from 'actions/staff-modal';
import { StaffList } from 'components/restaurant';
import { objectToArray } from 'helpers/format-helpers';

function mapStateToProps(state, props){
  var staff = state.staff.list.map(item => state.entities.staff[item])|| [];
  return {
    staff,
    restaurantId: props.restaurantId
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchStaff, removeStaffMember, editStaffMember}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StaffList);

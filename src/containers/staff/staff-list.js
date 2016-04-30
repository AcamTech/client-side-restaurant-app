import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchStaff, removeStaffMember} from 'actions/staff';
import {editStaffMember} from 'actions/staff-modal';
import StaffList from 'components/staff/staff-list';
import { objectToArray } from 'helpers/format-helpers';

function mapStateToProps(state, props){
  return {
    staff: objectToArray(state.staff.list || {}),
    restaurantId: props.restaurantId
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchStaff, removeStaffMember, editStaffMember}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StaffList);

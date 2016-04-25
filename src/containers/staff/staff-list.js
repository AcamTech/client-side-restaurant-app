import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchStaff} from 'actions/staff';
import StaffList from 'components/staff/staff-list';

function mapStateToProps(state){
  return {
    staff: state.staff.list
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchStaff}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StaffList);

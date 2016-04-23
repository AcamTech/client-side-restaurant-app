import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addRestaurant} from '../actions/restaurants';
import RegisterRestaurantModal from '../components/register-restaurant-modal';

function mapStateToProps(state){
  return {};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addRestaurant}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterRestaurantModal);

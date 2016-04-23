import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchRestaurants} from '../actions/restaurants';
import AdminRestaurantList from '../components/admin-restaurant-list';

function mapStateToProps(state){
  return {
    restaurants: state.restaurants.list
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchRestaurants}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminRestaurantList);

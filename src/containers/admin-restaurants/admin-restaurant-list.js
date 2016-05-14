import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getRestaurants} from 'actions/restaurants';
import {openCreateRestaurantModal} from 'actions/create-restaurant-modal';
import AdminRestaurantList from 'components/admin-restaurants/admin-restaurant-list';

function mapStateToProps(state){
  var restaurantList = state.restaurants.list;
  return {
    restaurants: state.entities.restaurants,
    isFetching: state.restaurants.isFetching
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    openCreateRestaurantModal,
    getRestaurants
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminRestaurantList);

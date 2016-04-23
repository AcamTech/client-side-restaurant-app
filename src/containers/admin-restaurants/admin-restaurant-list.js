import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchRestaurants} from 'src/actions/restaurants';
import {openCreateRestaurantModal} from 'src/actions/create-restaurant-modal';
import AdminRestaurantList from 'src/components/admin-restaurants/admin-restaurant-list';

function mapStateToProps(state){
  return {
    restaurants: state.restaurants.list
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    openCreateRestaurantModal,
    fetchRestaurants
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminRestaurantList);
import Firebase from 'firebase';
import * as actionTypes from 'constants/action-types';
import {closeCreateRestaurantModal} from './create-restaurant-modal';
import {TransformToArrayOfIds} from 'helpers/format-helpers';
import { fetchRestaurants, fetchRestaurant, createRestaurant, updateRestaurant } from 'helpers/api';

export function getRestaurants(){
  return function getRestaurantsThunk(dispatch){
    dispatch({type: actionTypes.FETCH_RESTAURANTS_PENDING});
    fetchRestaurants()
      .then(payload => {
        dispatch({type: actionTypes.RECEIVE_ENTITIES, payload: payload.entities});
        dispatch({type: actionTypes.FETCH_RESTAURANTS_FULFILLED, payload: TransformToArrayOfIds(payload.result)});
      })
      .catch(error => dispatch({type: actionTypes.FETCH_RESTAURANTS_REJECTED, payload: error.message}));
  };
}

export function registerRestaurant(restaurant){
  return function registerRestaurantThunk(dispatch){
    var {id, promise} = createRestaurant(restaurant);
    return promise.then( () => {
      var entities = {restaurants: {[id]: {id, ...restaurant}}};
      dispatch({
        type: actionTypes.RECEIVE_ENTITIES,
        payload: entities
      });
      dispatch({type: actionTypes.ADD_RESTAURANT, payload: id});
      return restaurant;
    })
    .catch(error => {throw new Error(error);});
  };
}

export function updateRestaurantAction(id, data){
  return function(dispatch){
    dispatch({type: actionTypes.UPDATE_RESTAURANT_PENDING});
    updateRestaurant(id, data)
      .then(payload => {
        dispatch({
          type: actionTypes.RECEIVE_ENTITIES,
          payload: payload.entities
        });
      })
      .catch(error => dispatch({type: actionTypes.UPDATE_RESTAURANT_REJECTED, payload: error.message}));
  }
}

export function getRestaurant(restaurantId){
  return function(dispatch, getState){
    if(shouldFetchRestaurant(getState(), restaurantId)){
      dispatch(getRestaurantAction(restaurantId));
    }else{
      dispatch({type: actionTypes.FETCH_RESTAURANT_FULFILLED, payload: [restaurantId]});
    }
  };
}

function getRestaurantAction(id){
  return function getRestaurantThunk(dispatch){
    dispatch({type: actionTypes.FETCH_RESTAURANT_PENDING});
    fetchRestaurant(id)
      .then(payload => {
        dispatch({type: actionTypes.RECEIVE_ENTITIES, payload: payload.entities});
        dispatch(fetchRestaurantFulfilled(TransformToArrayOfIds(payload.result)));
      })
      .catch(error => dispatch({type: actionTypes.FETCH_RESTAURANT_REJECTED, payload: error.message}));
  };
}

function shouldFetchRestaurant(state, restaurantId){
  var restaurant = state.entities.restaurants[restaurantId];
  var restaurantShow = state.restaurantShow;
  if(!restaurant){
    return true;
  }else if(restaurantShow.isFetching){
    return false;
  }
}

function fetchRestaurantFulfilled(data){
  return {
    type: actionTypes.FETCH_RESTAURANT_FULFILLED,
    payload: data
  };
}

export function deselectRestaurant(){
  return {
    type: actionTypes.DESELECT_RESTAURANT
  };
}

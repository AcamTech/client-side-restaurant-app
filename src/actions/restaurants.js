import Firebase from 'firebase';
import * as actionTypes from 'constants/action-types';
import {closeCreateRestaurantModal} from './create-restaurant-modal';
import {TransformToArrayOfIds} from 'helpers/format-helpers';
import { fetchRestaurants, fetchRestaurant, createRestaurant } from 'helpers/api';

export function getRestaurants(){
  return function getRestaurantsThunk(dispatch){
    fetchRestaurants()
      .then(payload => {
        dispatch({type: actionTypes.RECEIVE_ENTITIES, payload: payload.entities});
        dispatch({type: actionTypes.FETCH_RESTAURANTS, payload: TransformToArrayOfIds(payload.result)});
      })
      .catch(error => {throw new Error(error);});
  };
}

export function registerRestaurant(restaurant){
  return function registerRestaurantThunk(dispatch){
    var {id, promise} = createRestaurant(restaurant);
    promise.then( () => {
      var entities = {restaurants: {[id]: {id, ...restaurant}}};
      dispatch({
        type: actionTypes.RECEIVE_ENTITIES,
        payload: entities
      });
      dispatch({type: actionTypes.ADD_RESTAURANT, payload: id});
      return restaurant;
    })
    .then(() => dispatch(closeCreateRestaurantModal()))
    .catch(error => {throw new Error(error);});
  };
}

export function getRestaurant(id){
  return function getRestaurantThunk(dispatch){
    fetchRestaurant(id)
      .then(payload => {
        dispatch({type: actionTypes.RECEIVE_ENTITIES, payload: payload.entities});
        dispatch(fetchRestaurantFulfilled(TransformToArrayOfIds(payload.result)));
      });
  };
}

function fetchRestaurantFulfilled(data){
  return {
    type: actionTypes.FETCH_RESTAURANT,
    payload: data
  };
}

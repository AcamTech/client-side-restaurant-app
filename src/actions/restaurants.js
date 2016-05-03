import Firebase from 'firebase';
import * as actionTypes from 'constants/action-types';
import {closeCreateRestaurantModal} from './create-restaurant-modal';
import { fetchRestaurants, createRestaurant } from 'helpers/api';

export function getRestaurants(){
  return function getRestaurantsThunk(dispatch){
    fetchRestaurants()
      .then(restaurants => dispatch({type: actionTypes.FETCH_RESTAURANTS, payload: restaurants}))
      .catch(error => {throw new Error(error);});
  };
}

export function registerRestaurant(restaurant){
  return function registerRestaurantThunk(dispatch){
    var {id, promise} = createRestaurant(restaurant);
    promise.then( () => {
      dispatch({
        type: actionTypes.ADD_RESTAURANT,
        payload: {
          key: id,
          restaurant: {id, ...restaurant}
        }
      });
      return restaurant;
    })
    .then(() => dispatch(closeCreateRestaurantModal()))
    .catch(error => {throw new Error(error);});
  };
}

import Firebase from 'firebase';
import * as actionTypes from 'src/constants/action-types';
import {closeCreateRestaurantModal} from './create-restaurant-modal';

const Restaurants = new Firebase('https://toque-app.firebaseio.com/restaurants');

export function fetchRestaurants(){
  return function fetchRestaurantsThunk(dispatch){
    Restaurants.once('value', (snap) => {
      dispatch({type: actionTypes.FETCH_RESTAURANTS, payload: snap.val()});
    });
  };
}

export function addRestaurant(restaurant){
  return function addRestaurantThunk(dispatch){
    const newRestaurant = Restaurants.push(restaurant, (error) => {
      if (error) {
        alert('Oops, an error has ocurred!');
      } else {
        dispatch({
          type: actionTypes.ADD_RESTAURANT,
          payload: {
            key: newRestaurant.key(),
            restaurant: restaurant
          }
        });
        dispatch(closeCreateRestaurantModal());
      }
    });
  };
}

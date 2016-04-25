import Firebase from 'firebase';
import * as actionTypes from 'constants/action-types';
import {closeCreateRestaurantModal} from './create-restaurant-modal';
import {ref} from 'constants/firebase';

const Restaurants = ref.child('restaurants');

export function fetchRestaurants(){
  return function fetchRestaurantsThunk(dispatch){
    Restaurants.once('value', (snap) => {
      dispatch({type: actionTypes.FETCH_RESTAURANTS, payload: snap.val()});
    });
  };
}

export function registerRestaurant(restaurant){
  return function registerRestaurantThunk(dispatch){
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

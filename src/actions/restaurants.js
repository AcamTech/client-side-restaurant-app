import Firebase from 'firebase';
import * as actionTypes from '../constants/action-types';

const Restaurants = new Firebase('https://toque-app.firebaseio.com/restaurants');

export default function fetchRestaurants(){
  return function fetchRestaurantsThunk(dispatch){
    Restaurants.on('value', (snap) => {
      dispatch({type: actionTypes.FETCH_RESTAURANTS, payload: snap.val()})
    })
  }
}

import Firebase from 'firebase';
import { fetchRestaurant } from 'helpers/api';
import * as actionTypes from 'constants/action-types';

export function getRestaurant(id){
  return function getRestaurantThunk(dispatch){
    fetchRestaurant(id)
      .then(({id, data}) => ({[id]: data}))
      .then(restaurant => dispatch(fetchRestaurantFulfilled(restaurant)));
  };
}

function fetchRestaurantFulfilled(data){
  return {
    type: actionTypes.FETCH_RESTAURANT,
    payload: data
  };
}

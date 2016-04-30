import Firebase from 'firebase';
import * as actionTypes from 'constants/action-types';
import {ref} from 'constants/firebase';

export function fetchRestaurant(id){
  return function fetchRestaurantThunk(dispatch){
    ref.child(`restaurants/${id}`)
      .once('value')
      .then(snapshot => {
        var id = snapshot.key(),
          value = snapshot.val(),
          data = {[id]: value};
        dispatch(fetchRestaurantFulfilled(data));
      });
  };
}

function fetchRestaurantFulfilled(data){
  return {
    type: actionTypes.FETCH_RESTAURANT,
    payload: data
  };
}

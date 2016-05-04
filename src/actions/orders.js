import Firebase from 'firebase';
import * as actionTypes from 'constants/action-types';
import {ref} from 'constants/firebase';

export function fetchOrders(restaurantId){
  return function fetchOrdersThunk(dispatch){
    const tablesRef = ref.child(`restaurants/${restaurantId}/orders`);
    tablesRef.once('value')
      .then(snapshot => {
        dispatch({ type: actionTypes.FETCH_ORDERS, payload: snapshot.val() });
      });
  };
}

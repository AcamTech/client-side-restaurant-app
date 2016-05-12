import Firebase from 'firebase';
import * as actionTypes from 'constants/action-types';
import {ref} from 'constants/firebase';

function ArrayToObject(arr){
  return arr.reduce(function(initial, item){
    return Object.assign({}, initial, item);
  }, {});
}

// gets a value promise from firebase and a path to look out and return an object with the results
function getInnerDataFromUrl(value, path){
  return value
    .then(snapshot => snapshot.val())
    .then(response => Object.keys(response || {}))
    .then(items => {
      return items.map(id => {
        return ref.child(`${path}/${id}/`)
          .once('value')
          .then(snapshot => {
            return {[snapshot.key()]: snapshot.val()};
          });
      });
    })
    .then(promisesArray => Promise.all(promisesArray))
    .then(items => ArrayToObject(items));
}

export function fetchOrders(restaurantId){
  return function fetchOrdersThunk(dispatch){
    const ordersRef = ref.child(`restaurants/${restaurantId}/orders/`);
    const promiseValue = ordersRef.once('value');
    getInnerDataFromUrl(promiseValue, 'restaurants_orders')
      .then(orders => dispatch({ type: actionTypes.FETCH_ORDERS, payload: orders }));
  };
}


export function fetchOrdersForWaiter(waiterId, restaurantId){
  return function(dispatch){
    const promiseValue = ref.child(`restaurants_staff/${waiterId}/orders`)
      .once('value');
    getInnerDataFromUrl(promiseValue, `restaurants/${restaurantId}/orders`)
      .then(orders => dispatch({ type: actionTypes.FETCH_ORDERS, payload: orders }));
    ref.child(`restaurants/${restaurantId}/orders`)
      .on('child_changed', function(snapshot){
        dispatch({type: actionTypes.UPDATE_ORDER, payload: {[snapshot.key()]: snapshot.val()} });
      });
  };
}

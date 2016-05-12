import Firebase from 'firebase';
import { push } from 'react-router-redux';
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
  };
}

export function listenForWaiterOrders(restaurantId){
  return function(dispatch){
    ref.child(`restaurants/${restaurantId}/orders`)
      .on('child_changed', function waiterOrderChangedThunk(snapshot){
      dispatch({type: actionTypes.UPDATE_ORDER, payload: {[snapshot.key()]: snapshot.val()} });
    });
  };
}

export function stopListenningForWaiterOrders(restaurantId){
  return function(dispatch){
    ref.child(`restaurants/${restaurantId}/orders`)
      .off('child_changed');
  };
}

export function createOrder(order, restaurantId, waiterId) {
  return function createOrderThunk(dispatch){
    var newOrderRef = ref.child(`restaurants/${restaurantId}/orders`).push();

    var newOrder = Object.assign({
      restaurant: restaurantId,
      state: 'QUEUED',
      waiter: waiterId
    }, {
      total: order.total,
      table: order.table,
      createdAt: Firebase.ServerValue.TIMESTAMP
    });

    newOrderRef.set(newOrder)
      .then(() => Object.keys(order.items))
      .then((keys) => {
        return keys.map(key => {
          var itemRef = newOrderRef.child('items').push();
          var item = order.items[key];

          return itemRef.set(item)
            .then(() => {
              return {[itemRef.key()]: item};
            });
        });
      })
      .then(promisesArray => Promise.all(promisesArray))
      .then(array => ArrayToObject(array))
      .then(items => newOrder.items = items)
      .then(() => {
        ref.child(`restaurants_staff/${waiterId}/orders/`)
          .update({ [newOrderRef.key()]: true })
          .then(() => {
            dispatch({ type: actionTypes.CREATE_ORDER, payload: {[newOrderRef.key()]: newOrder}});
            dispatch(push(`/restaurante/${restaurantId}/ordenes/lista`));
          });
      });
  };
}

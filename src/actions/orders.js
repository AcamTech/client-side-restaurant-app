import Firebase from 'firebase';
import { push } from 'react-router-redux';
import * as actionTypes from 'constants/action-types';
import {
    getTotalOrders, incrementTotalOrders,
    decrementTotalOrders
} from 'helpers/api';
import {ref} from 'constants/firebase';
import {getInnerDataFromUrl, ArrayToObject} from 'helpers/format-helpers';
import transitions from 'businessLogic/order-states';

function getTransition(oldState, action) {
  var transition = transitions[oldState][action];
  transition.at = Firebase.ServerValue.TIMESTAMP;
  return transition;
}

export function fetchOrders(restaurantId){
  return function fetchOrdersThunk(dispatch){
    const ordersRef = ref.child(`restaurants/${restaurantId}/orders/`);

    const promiseValue = ordersRef.once('value')
      .then(snapshot => {
        dispatch({ type: actionTypes.FETCH_ORDERS, payload: snapshot.val()});
      });
  };
}

export function fetchOrdersForWaiter(waiterId, restaurantId){
  return function(dispatch){
    const promiseValue = ref.child(`restaurants_staff/${waiterId}/orders`)
      .once('value');
    getInnerDataFromUrl(promiseValue, ref, `restaurants/${restaurantId}/orders`)
      .then(orders => dispatch({ type: actionTypes.FETCH_ORDERS, payload: orders }));
  };
}

export function listenOrders(restaurantId){
  return function(dispatch){
    ref.child(`restaurants/${restaurantId}/orders`)
      .on('child_changed', function orderChangedThunk(snapshot){
      dispatch({type: actionTypes.UPDATE_ORDER, payload: {[snapshot.key()]: snapshot.val()} });
    });
  };
}

export function stopListenningOrders(restaurantId){
  return function(dispatch){
    ref.child(`restaurants/${restaurantId}/orders`)
      .off('child_changed');
  };
}

export function saveOrder(order, restaurantId, waiterId) {
  return function saveOrderThunk(dispatch){
    const ordersRef = ref.child(`restaurants/${restaurantId}/orders`);
    function makeNewOrder(order) {
      return {
        orderNumber: '',
        createdAt: Firebase.ServerValue.TIMESTAMP,
        restaurant: restaurantId,
        state: 'QUEUED',
        waiter: waiterId,
        total: order.total,
        table: order.table
      };
    }

    function saveOrderItems(newOrderRef, items) {
      const ids = Object.keys(items);

      return ids.map(id => {
        var itemRef = newOrderRef.child('items').push();
        var item = items[id];

        return itemRef.set(item)
          .then(() => {
            return {[itemRef.key()]: item};
          });
      });
    }

    var {state, id} = order;

    if (id) {
      return ordersRef
        .child(id)
        .set(order)
        .then(() => {
          dispatch(push(`/restaurante/${restaurantId}/ordenes/lista`));
          if (state && state !== 'QUEUED') {
            updateOrderState(order, 'request')(dispatch);
          }
        });
    } else {
      const newOrderRef = ordersRef.push();
      const newOrder = makeNewOrder(order);

      newOrder.id = newOrderRef.key();

      return incrementTotalOrders(restaurantId)
        .then(() => getTotalOrders(restaurantId))
        .then(orders => {
          return Object.assign({}, newOrder, {orderNumber: orders});
        })
        .then(newOrder => {
          return newOrderRef
            .set(newOrder)
            .then(() => {
              return newOrderRef
                .child('history')
                .push()
                .set({
                  oldState: '',
                  newState: 'QUEUED',
                  action: 'create',
                  actor: 'waiter',
                  at: Firebase.ServerValue.TIMESTAMP
                });
            });
        })
        .then(() => {
          const promises = saveOrderItems(newOrderRef, order.items);

          return Promise.all(promises)
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
        })
        .catch(err => {
          return decrementTotalOrders(restaurantId);
        });
    }
  };
}

export function newOrder(restaurantId) {
  return function newOrder(dispatch) {
    const pushToForm = push(`/restaurante/${restaurantId}/ordenes/nueva-orden`);
    const unselectOrderAction = {
      type: actionTypes.SET_SELECTED_ORDER,
      payload: null
    };

    dispatch(unselectOrderAction);
    dispatch(pushToForm);
  };
}

export function updateOrderState(order, action) {
  return function updateOrderState(dispatch) {
    const {id, restaurant, state} = order;
    const ordersRef = ref.child(`restaurants/${restaurant}/orders`);
    const transition = getTransition(state, action);
    const changes = {state: transition.newState};

    var orderRef = ordersRef.child(id);

    orderRef
      .update(changes)
      .then(() => {
        return orderRef.child('history')
          .push()
          .set(transition);
      })
      .then(() => {
        return orderRef.once('value').then((snapshot) => {
          dispatch({type: actionTypes.UPDATE_ORDER, payload: {[snapshot.key()]: snapshot.val()} });
        });
      });
  };
}


export function editOrder(id, restaurantId, waiterId) {
  return function editOrderThunk(dispatch) {

    function checkOwnership(id) {
      const waiterOrdersRef = ref.child(`restaurants_staff/${waiterId}/orders/`);

      return waiterOrdersRef
        .once('value')
        .then(snapshot => {
          const orders = snapshot.val();
          const ids = Object.keys(orders);
          const ownsOrder = ids.indexOf(id) != -1;

          return ownsOrder;
        });
    }

    function loadOrder(id) {
      const orderRef = ref.child(`restaurants/${restaurantId}/orders/${id}`);

      return orderRef.once('value')
        .then(snapshot => {
          const order = snapshot.val();
          return order;
        });
    }

    function selectOrder(order) {
      const selectOrderAction = {
        type: actionTypes.SET_SELECTED_ORDER,
        payload: order
      };

      dispatch(selectOrderAction);
    }

    function redirectToOrder() {
      const pushToOrder = push(`/restaurante/${restaurantId}/ordenes/editar-orden`);
      dispatch(pushToOrder);
    }

    checkOwnership(id)
      .then(isOwner => {
        if (isOwner) {
          loadOrder(id)
            .then(order => {
              selectOrder(order);
              redirectToOrder();
            });
        } else {
          const pushToList = push(`/restaurante/${restaurantId}/ordenes/lista`);
          dispatch(pushToList);
        }
      });
  };
}

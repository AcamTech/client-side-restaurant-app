import Firebase from 'firebase';
import { push } from 'react-router-redux';
import * as actionTypes from 'constants/action-types';
import {ref} from 'constants/firebase';
import {getInnerDataFromUrl, ArrayToObject} from 'helpers/format-helpers';

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

export function saveOrder(order, restaurantId, waiterId) {
  return function saveOrderThunk(dispatch){
    const ordersRef = ref.child(`restaurants/${restaurantId}/orders`);

    function makeNewOrder(order) {
      return {
        restaurant: restaurantId,
        state: 'QUEUED',
        waiter: waiterId,
        total: order.total,
        table: order.table,
        createdAt: Firebase.ServerValue.TIMESTAMP
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

    if (order.id) {
      ordersRef.child(order.id)
        .set(order)
        .then(() => {
          dispatch(push(`/restaurante/${restaurantId}/ordenes/lista`));
        });
    } else {
      const newOrderRef = ordersRef.push();
      const newOrder = makeNewOrder(order);

      newOrder.id = newOrderRef.key();

      newOrderRef.set(newOrder)
        .then(() => {
          const promises = saveOrderItems(newOrderRef, order.items);

          Promise.all(promises)
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

export function cancelOrder(id, restaurantId, waiterId) {
  return function cancelOrder(dispatch) {
    const ordersRef = ref.child(`restaurants/${restaurantId}/orders`);
    ordersRef.child(id).update({
      state: 'CANCELED',
      canceledAt: Firebase.ServerValue.TIMESTAMP,
      canceledBy: waiterId
    }).then((snapshot) => {
      dispatch({type: actionTypes.UPDATE_ORDER, payload: {[snapshot.key()]: snapshot.val()} });
    });
  }
}

export function editOrder(id, restaurantId, waiterId) {
  return function editOrderThunk(dispatch) {

    function checkOwnership(id) {
      const waiterOrdersRef = ref.child(`restaurants_staff/${waiterId}/orders/`);

      return waiterOrdersRef.once('value')
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

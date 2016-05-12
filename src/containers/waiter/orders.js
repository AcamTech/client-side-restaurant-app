import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchOrders, fetchOrdersForWaiter, listenForWaiterOrders, stopListenningForWaiterOrders } from 'actions/orders';
import { WaiterOrders } from 'components/waiter';
import { objectToArray } from 'helpers/format-helpers';

function mapStateToProps(state, props){
  return {
    waiterId: state.staff.authedId,
    orders: objectToArray(state.orders.list || {}),
    restaurantId: props.restaurantId
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchOrders,
    fetchOrdersForWaiter,
    listenForWaiterOrders,
    stopListenningForWaiterOrders
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WaiterOrders);

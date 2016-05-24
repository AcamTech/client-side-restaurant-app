import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchOrders, updateOrderState, listenOrders, stopListenningOrders} from 'actions/orders';
import { KitchenOrders } from 'components/kitchen';
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
    updateOrderState,
    listenOrders,
    stopListenningOrders
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(KitchenOrders);

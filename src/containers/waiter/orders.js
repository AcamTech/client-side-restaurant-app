import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchOrders } from 'actions/orders';
import { WaiterOrders } from 'components/waiter';
import { objectToArray } from 'helpers/format-helpers';

function mapStateToProps(state, props){
  return {
    orders: objectToArray(state.orders.list || {}),
    restaurantId: props.restaurantId
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchOrders}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WaiterOrders);

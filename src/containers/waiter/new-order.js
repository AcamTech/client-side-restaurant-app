import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchDishes } from 'actions/dishes';
import { fetchTables } from 'actions/tables';
import { createOrder } from 'actions/orders';
import { WaiterNewOrder } from 'components/waiter';
import { objectToArray } from 'helpers/format-helpers';

function mapStateToProps(state, props){
  return {
    waiterId: state.staff.authedId,
    dishes: state.dishes.list || {},
    tables: objectToArray(state.tables.list || {}),
    selectedOrder: state.orders.selectedOrder,
    restaurantId: props.restaurantId
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchDishes, fetchTables, createOrder}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WaiterNewOrder);

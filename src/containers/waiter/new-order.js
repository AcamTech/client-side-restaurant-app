import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchDishes } from 'actions/dishes';
import { fetchTables } from 'actions/tables';
import { saveOrder } from 'actions/orders';
import { WaiterNewOrder } from 'components/waiter';
import { objectToArray } from 'helpers/format-helpers';

function mapStateToProps(state, props){
  var dishes = state.dishes.list.map(dish => state.entities.dishes[dish]);
  var tables = state.tables.list.map(table => state.entities.tables[table]);
  return {
    waiterId: state.staff.authedId,
    dishes,
    tables,
    selectedOrder: state.orders.selectedOrder,
    restaurantId: props.restaurantId
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchDishes, fetchTables, saveOrder}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WaiterNewOrder);

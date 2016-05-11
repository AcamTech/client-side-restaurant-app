import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchDishes } from 'actions/dishes';
import { fetchTables } from 'actions/tables';
import { WaiterNewOrder } from 'components/waiter';
import { objectToArray } from 'helpers/format-helpers';

function mapStateToProps(state, props){
  return {
    dishes: objectToArray(state.dishes.list || {}),
    tables: objectToArray(state.tables.list || {}),
    restaurantId: props.restaurantId
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchDishes, fetchTables}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WaiterNewOrder);

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchDishes} from 'actions/dishes';
import { WaiterNewOrder } from 'components/waiter';
import { objectToArray } from 'helpers/format-helpers';

function mapStateToProps(state, props){
  return {
    dishes: objectToArray(state.dishes.list || {}),
    restaurantId: props.restaurantId
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchDishes}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WaiterNewOrder);

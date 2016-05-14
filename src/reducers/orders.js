import * as actiontypes from '../constants/action-types';

export default function orders(state={
  isFetching: false,
  list: {},
  selectedOrder: null
}, action){
  var {type, payload} = action;
  switch(type){
    case actiontypes.FETCH_ORDERS:
      return {...state, list: payload};
    case actiontypes.UPDATE_ORDER:
      return {...state, list: {...state.list, ...payload}};
    case actiontypes.CREATE_ORDER:
      return {...state, list: {...state.list, ...payload}};
    case actiontypes.SET_SELECTED_ORDER:
      return {...state, selectedOrder: payload};
    default:
      return state;
  }
}

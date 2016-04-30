import * as actiontypes from '../constants/action-types';

export default function tables(state={
  isFetching: false,
  list: {}
}, action){
  var {type, payload} = action;
  switch(type){
    case actiontypes.ADD_TABLE:
      return {...state, list: Object.assign({}, state.list, payload)};
    case actiontypes.FETCH_TABLES:
      return {...state, list: payload};
    case actiontypes.REMOVE_TABLE:
      delete state.list[payload.id];
      return {...state, list: {...state.list}}
    case actiontypes.UPDATE_TABLE:
      return {...state, list: {...state.list, ...payload}}
    default:
      return state;
  }
}

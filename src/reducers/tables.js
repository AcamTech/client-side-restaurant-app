import * as actiontypes from '../constants/action-types';

export default function tables(state={
  isFetching: false,
  list: []
}, action){
  var {type, payload} = action;
  switch(type){
    case actiontypes.ADD_TABLE:
      return {...state, list: [...state.list, payload]};
    case actiontypes.FETCH_TABLES:
      return {...state, list: payload};
    case actiontypes.REMOVE_TABLE:
      var index = state.list.indexOf(payload);
      return {...state, list: [
        ...state.list.slice(0, index),
        ...state.list.slice(index + 1)
      ]};
    case actiontypes.UPDATE_TABLE:
      return {...state, list: {...state.list, ...payload}};
    default:
      return state;
  }
}

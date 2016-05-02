import * as actiontypes from '../constants/action-types';

export default function dishes(state={
  isFetching: false,
  list: {}
}, action){
  var {type, payload} = action;
  switch(type){
    case actiontypes.ADD_DISH:
      return {...state, list: Object.assign({}, state.list, payload)};
    case actiontypes.FETCH_DISHES:
      return {...state, list: payload};
    case actiontypes.REMOVE_DISH:
      delete state.list[payload.id];
      return {...state, list: {...state.list}};
    case actiontypes.UPDATE_DISH:
      return {...state, list: {...state.list, ...payload}};
    default:
      return state;
  }
}

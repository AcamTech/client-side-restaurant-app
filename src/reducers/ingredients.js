import * as actiontypes from '../constants/action-types';

export default function ingredients(state={
  isFetching: false,
  list: {}
}, action){
  var {type, payload} = action;
  switch(type){
    case actiontypes.ADD_INGREDIENT:
      return {...state, list: Object.assign({}, state.list, payload)};
    case actiontypes.FETCH_INGREDIENTS:
      return {...state, list: payload};
    case actiontypes.REMOVE_INGREDIENT:
      delete state.list[payload.id];
      return {...state, list: {...state.list}};
    case actiontypes.UPDATE_INGREDIENT:
      return {...state, list: {...state.list, ...payload}};
    default:
      return state;
  }
}

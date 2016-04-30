import * as actiontypes from '../constants/action-types';

export default function categories(state={
  isFetching: false,
  list: {}
}, action){
  var {type, payload} = action;
  switch(type){
    case actiontypes.ADD_CATEGORY:
      return {...state, list: Object.assign({}, state.list, payload)};
    case actiontypes.FETCH_CATEGORIES:
      return {...state, list: payload};
    case actiontypes.REMOVE_CATEGORY:
      delete state.list[payload.id];
      return {...state, list: {...state.list}}
    case actiontypes.UPDATE_CATEGORY:
      return {...state, list: {...state.list, ...payload}}
    default:
      return state;
  }
}

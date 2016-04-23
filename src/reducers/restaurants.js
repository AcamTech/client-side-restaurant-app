import * as actiontypes from '../constants/action-types';

export default function restaurants(state={
  list: {}
}, action){
  var {type, payload} = action;
  switch(type){
    case actiontypes.FETCH_RESTAURANTS:
      return {...state, list: payload};
    case actiontypes.ADD_RESTAURANT:
      var newItem = {};
      newItem[payload.key] = payload.restaurant;
      return {...state, list: Object.assign({}, state.list, newItem)};
    default:
      return state;
  }
}

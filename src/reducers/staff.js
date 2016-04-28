import * as actiontypes from '../constants/action-types';

export default function staff(state={
  list: {}
}, action){
  var {type, payload} = action;
  switch(type){
    case actiontypes.ADD_STAFF_MEMBER:
      return {...state, list: Object.assign({}, state.list, payload)};
    case actiontypes.FETCH_STAFF:
      return {...state, list: payload};
    case actiontypes.UPDATE_STAFF_MEMBER:
      // TODO: Add code
      return state;
    case actiontypes.REMOVE_STAFF_MEMBER:
      var list = Object.assign({}, state.list);
      delete list[payload];
      return {...state, list: list};
    default:
      return state;
  }
}

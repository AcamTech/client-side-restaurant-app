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
    default:
      return state;
  }
}

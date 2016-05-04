import * as actiontypes from '../constants/action-types';

export default function orders(state={
  isFetching: false,
  list: {}
}, action){
  var {type, payload} = action;
  switch(type){
    case actiontypes.FETCH_ORDERS:
      return {...state, list: payload};
    default:
      return state;
  }
}

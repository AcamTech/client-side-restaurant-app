import * as actiontypes from '../constants/action-types';

export default function restaurants(state={
  isFetching: true,
  list: []
}, action){
  var {type, payload} = action;
  switch(type){
    case actiontypes.FETCH_RESTAURANTS_PENDING:
      return {...state, isFetching: true};
    case actiontypes.FETCH_RESTAURANTS_FULFILLED:
      return {...state, isFetching: false, list: payload};
    case actiontypes.FETCH_RESTAURANTS_REJECTED:
      return {...state, isFetching:false, errors: payload};
    case actiontypes.ADD_RESTAURANT:
      return {...state, list: [...state.list, payload]};
    default:
      return state;
  }
}

import * as actiontypes from '../constants/action-types';

export default function restaurants(state={
  isFetching: true,
  list: []
}, action){
  var {type, payload} = action;
  switch(type){
    case actiontypes.FETCH_RESTAURANTS:
      return {...state, isFetching:false, list: payload};
    case actiontypes.ADD_RESTAURANT:
      return {...state, list: [...state.list, payload]};
    case actiontypes.FETCH_RESTAURANT:
      return {...state, isFetching: false, list: {...payload}};
    default:
      return state;
  }
}

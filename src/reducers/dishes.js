import * as actiontypes from '../constants/action-types';

export default function dishes(state={
  isFetching: false,
  lastFetched: '',
  list: []
}, action){
  var {type, payload} = action;
  switch(type){
    case actiontypes.ADD_DISH:
      return {...state, list: [...state.list, payload]};
    case actiontypes.FETCH_DISHES:
      return {...state, isFetching: true};
    case actiontypes.FETCH_DISHES_FULFILLED:
      return {
        ...state,
        isFetching: false,
        lastFetched: Date.now(),
        list: payload
      };
    case actiontypes.REMOVE_DISH:
      var index = state.list.indexOf(payload);
      return {...state, list: [
        ...state.list.slice(0, index),
        ...state.list.slice(index + 1)
      ]};
    default:
      return state;
  }
}

import * as actiontypes from '../constants/action-types';

export default function categories(state={
  isFetching: false,
  lastFetched: '',
  list: []
}, action){
  var {type, payload} = action;
  switch(type){
    case actiontypes.ADD_CATEGORY:
      return {...state, list: [...state.list, payload]};
    case actiontypes.FETCH_CATEGORIES:
      return {
        ...state,
        isFetching: true
      };
    case actiontypes.FETCH_CATEGORIES_FULFILLED:
      return {
        ...state,
        lastFetched: Date.now(),
        list: payload,
        isFetching: false
      };
    case actiontypes.REMOVE_CATEGORY:
      var index = state.list.indexOf(payload);
      return {
        ...state, list:[
          ...state.list.slice(0, index),
          ...state.list.slice(index + 1)
        ]
      };
    default:
      return state;
  }
}

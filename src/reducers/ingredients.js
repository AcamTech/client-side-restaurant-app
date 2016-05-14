import * as actionTypes from '../constants/action-types';

export default function ingredients(state={
  isFetching: false,
  lastFetched: '',
  list: []
}, action){
  var {type, payload} = action;
  switch(type){
    case actionTypes.ADD_INGREDIENT:
      return {...state, list: [...state.list, payload]};
    case actionTypes.FETCH_INGREDIENTS:
      return {...state, isFetching: true};
    case actionTypes.FETCH_INGREDIENTS_FULFILLED:
      return {...state, isFetching: false, lastFetched: Date.now(), list: payload};
    case actionTypes.REMOVE_INGREDIENT:
      var index = state.list.indexOf(payload);
      return {...state, list: [
        ...state.list.slice(0, index),
        ...state.list.slice(index + 1)
      ]};
    default:
      return state;
  }
}

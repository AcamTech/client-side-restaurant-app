import * as actiontypes from '../constants/action-types';

export default function restaurants(state={
  list: {}
}, action){
  var {type, payload} = action;
  switch(type){
    case actiontypes.FETCH_RESTAURANTS:
      console.log(payload);
      return {...state, list: payload};
    default:
      return state;
  }
}

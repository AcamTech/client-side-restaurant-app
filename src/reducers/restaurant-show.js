import * as actiontypes from 'constants/action-types';

const initialState = {
  isFetching: false,
  restaurant: ''
};

export default function restaurantShow(state=initialState, action){
  var {type, payload} = action;
  switch(type){
    case actiontypes.FETCH_RESTAURANT_PENDING:
      return {...state, isFetching: true};
    case actiontypes.FETCH_RESTAURANT_FULFILLED:
      return {...state, isFetching: false, restaurant: payload[0]};
    case actiontypes.FETCH_RESTAURANT_REJECTED:
      return {...state, isFetching: false, errors: payload};
    case actiontypes.DESELECT_RESTAURANT:
      return initialState;
    default:
      return state;
  }
}

import * as actionTypes from '../constants/action-types';

export default function createRestaurantModal(state={
  isOpen: false
}, action){
  var {type, payload} = action;
  switch(type){
    case actionTypes.OPEN_CREATE_RESTAURANT_MODAL:
      return {isOpen: true};
    case actionTypes.CLOSE_CREATE_RESTAURANT_MODAL:
      return {isOpen: false};
    default:
      return state;
  }
}

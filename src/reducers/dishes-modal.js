import * as actionTypes from '../constants/action-types';

export default function dishesModal(state={
  isOpen: false,
  isEditting: false
}, action){
  var {type, payload} = action;
  switch(type){
    case actionTypes.OPEN_DISHES_MODAL:
      return {isOpen: true, isEditting: false};
    case actionTypes.CLOSE_DISHES_MODAL:
      return {isOpen: false, isEditting: false};
    case actionTypes.SELECT_DISH_TO_EDIT:
      return {...state, selectedDish: payload, isEditting: true};
    default:
      return state;
  }
}

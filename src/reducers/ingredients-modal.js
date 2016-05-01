import * as actionTypes from '../constants/action-types';

export default function ingredientsModal(state={
  isOpen: false,
  isEditting: false
}, action){
  var {type, payload} = action;
  switch(type){
    case actionTypes.OPEN_INGREDIENTS_MODAL:
      return {isOpen: true, isEditting: false};
    case actionTypes.CLOSE_INGREDIENTS_MODAL:
      return {isOpen: false, isEditting: false};
    case actionTypes.SELECT_INGREDIENT_TO_EDIT:
      return {...state, selectedIngredient: payload, isEditting: true};
    default:
      return state;
  }
}

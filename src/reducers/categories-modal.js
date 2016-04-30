import * as actionTypes from '../constants/action-types';

export default function categoriesModal(state={
  isOpen: false,
  isEditting: false
}, action){
  var {type, payload} = action;
  switch(type){
    case actionTypes.OPEN_CATEGORIES_MODAL:
      return {isOpen: true, isEditting: false};
    case actionTypes.CLOSE_CATEGORIES_MODAL:
      return {isOpen: false, isEditting: false};
    case actionTypes.SELECT_CATEGORY_TO_EDIT:
      return {...state, selectedCategory: payload, isEditting: true};
    default:
      return state;
  }
}

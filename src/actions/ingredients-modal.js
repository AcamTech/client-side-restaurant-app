import * as actionTypes from 'constants/action-types';

export function openIngredientsModal(){
  return {
    type: actionTypes.OPEN_INGREDIENTS_MODAL
  };
}

export function closeIngredientsModal(){
  return {
    type: actionTypes.CLOSE_INGREDIENTS_MODAL
  };
}

export function editIngredient(ingredient){
  return function(dispatch){
    dispatch(openIngredientsModal());
    dispatch({type: actionTypes.SELECT_INGREDIENT_TO_EDIT, payload: ingredient});
  };
}

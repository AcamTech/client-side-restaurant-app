import * as actionTypes from 'constants/action-types';

export function openDishesModal(){
  return {
    type: actionTypes.OPEN_DISHES_MODAL
  };
}

export function closeDishesModal(){
  return {
    type: actionTypes.CLOSE_DISHES_MODAL
  };
}

export function editDish(dish){
  return function(dispatch){
    dispatch(openDishesModal());
    dispatch({type: actionTypes.SELECT_DISH_TO_EDIT, payload: dish});
  };
}

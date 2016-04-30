import * as actionTypes from 'constants/action-types';

export function openCategoriesModal(){
  return {
    type: actionTypes.OPEN_CATEGORIES_MODAL
  };
}

export function closeCategoriesModal(){
  return {
    type: actionTypes.CLOSE_CATEGORIES_MODAL
  };
}

export function editCategory(category){
  return function(dispatch){
    dispatch(openCategoriesModal());
    dispatch({type: actionTypes.SELECT_CATEGORY_TO_EDIT, payload: category});
  };
}

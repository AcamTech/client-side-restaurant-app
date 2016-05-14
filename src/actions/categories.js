import * as actionTypes from 'constants/action-types';
import { TransformToArrayOfIds } from 'helpers/format-helpers';
import {closeCategoriesModal} from './categories-modal';
import {
  receiveEntities, removeEntity
} from './entities';
import {
  getCategories, getCategory,
  deleteCategory, createCategory,
  updateCategory
} from 'helpers/api';

export function fetchCategories(restaurantId){
  return function fetchCategoriesThunk(dispatch, getState){
    if(shouldFetchCategories(getState(), restaurantId)){
      console.warn("entra");
      dispatch(fetchCategoriesAction(restaurantId));
    }
  };
}

function fetchCategoriesAction(restaurantId){
  return function(dispatch, getState){
    dispatch({type: actionTypes.FETCH_CATEGORIES});
    getCategories(restaurantId)
      .then(payload => {
        dispatch(receiveEntities(payload.entities));
        dispatch({
          type: actionTypes.FETCH_CATEGORIES_FULFILLED,
          payload: TransformToArrayOfIds(payload.result) });
      })
      .catch(error => {throw new Error(error);} );
  };
}


function shouldFetchCategories(state){
  var categories = state.categories;
  var categoriesList = categories.list;
  var now = Date.now();
  if(categories.isFetching){
    return false;
  }else if(categoriesList.length == 0){
    return true;
  }else{
    return (now - categories.lastFetched > (5 * 60 * 1000)); // 5 minutos
  }
}

export function removeCategory(item, restaurantId){
  return function removeCategoryThunk(dispatch){
    const {id} = item;
    deleteCategory(id, restaurantId)
      .then(() => {
        dispatch({type: actionTypes.REMOVE_CATEGORY, payload: id});
        dispatch(removeEntity(id, 'categories'));
      })
      .catch(error => {throw new Error(error);} );
  };
}

export function addOrEditCategory(category, restaurantId){
  return function addOrEditCategoryThunk(dispatch, getState){
    const {name, id} = category;

    if(!id){
      createCategory(name, restaurantId)
        .then(payload => {
          dispatch(receiveEntities(payload.entities));
          dispatch({
            type: actionTypes.ADD_CATEGORY,
            payload: payload.result
          });
          dispatch(closeCategoriesModal());
        })
        .catch(error => {throw new Error(error);} );
    }else{
      updateCategory(name, id, restaurantId)
        .then(payload => {
          dispatch(receiveEntities(payload.entities));
          dispatch(closeCategoriesModal());
        })
        .catch(error => {throw new Error(error);} );
    }
  };
}

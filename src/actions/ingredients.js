import * as actionTypes from 'constants/action-types';
import { TransformToArrayOfIds } from 'helpers/format-helpers';
import {closeIngredientsModal} from './ingredients-modal';
import {
  receiveEntities, removeEntity
} from './entities';
import {
  getIngredients, getIngredient,
  deleteIngredient, createIngredient,
  updateIngredient
} from 'helpers/api';

export function fetchIngredients(restaurantId){
  return function fetchIngredientsThunk(dispatch, getState){
    if(shouldFetchIngredients(getState(), restaurantId)){
      dispatch(fetchIngredientsAction(restaurantId));
    }
  };
}

function fetchIngredientsAction(restaurantId){
  return function(dispatch, getState){
    dispatch({type: actionTypes.FETCH_INGREDIENTS});
    getIngredients(restaurantId)
      .then(payload => {
        dispatch(receiveEntities(payload.entities));
        dispatch({
          type: actionTypes.FETCH_INGREDIENTS_FULFILLED,
          payload: TransformToArrayOfIds(payload.result) });
      })
      .catch(error => {throw new Error(error);} );
  };
}


function shouldFetchIngredients(state){
  var ingredients = state.ingredients;
  var ingredientsList = ingredients.list;
  var now = Date.now();
  if(ingredients.isFetching){
    return false;
  }else if(ingredientsList.length == 0){
    return true;
  }else{
    return (now - ingredients.lastFetched > (5 * 60 * 1000)); // 5 minutos
  }
}

export function removeIngredient(item, restaurantId){
  return function removeIngredientThunk(dispatch){
    const {id} = item;
    deleteIngredient(id, restaurantId)
      .then(() => {
        dispatch({type: actionTypes.REMOVE_INGREDIENT, payload: id});
        dispatch(removeEntity(id, 'ingredients'));
      })
      .catch(error => {throw new Error(error);});
  };
}

export function addOrEditIngredient(ingredient, restaurantId){
  return function addOrEditIngredientThunk(dispatch, getState){
    const {name, id} = ingredient;

    if(!id){
      createIngredient(ingredient, restaurantId)
        .then(payload => {
          dispatch(receiveEntities(payload.entities));
          dispatch({
            type: actionTypes.ADD_INGREDIENT,
            payload: payload.result
          });
          dispatch(closeIngredientsModal());
        })
        .catch(error => {throw new Error(error);} );
    }else{
      updateIngredient(ingredient, id, restaurantId)
        .then(payload => {
          dispatch(receiveEntities(payload.entities));
          dispatch(closeIngredientsModal());
        })
        .catch(error => {throw new Error(error);} );
    }
  };
}
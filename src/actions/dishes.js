import * as actionTypes from 'constants/action-types';
import { TransformToArrayOfIds } from 'helpers/format-helpers';
import {closeDishesModal} from './dishes-modal';
import {
  receiveEntities, removeEntity
} from './entities';
import {
  getDishes, getDish,
  deleteDish, createDish,
  updateDish
} from 'helpers/api';

export function fetchDishes(restaurantId){
  return function fetchDishesThunk(dispatch, getState){
    if(shouldFetchDishes(getState(), restaurantId)){
      dispatch(fetchDishesAction(restaurantId));
    }
  };
}

function fetchDishesAction(restaurantId){
  return function(dispatch, getState){
    dispatch({type: actionTypes.FETCH_DISHES});
    getDishes(restaurantId)
      .then(payload => {
        dispatch(receiveEntities(payload.entities));
        dispatch({
          type: actionTypes.FETCH_DISHES_FULFILLED,
          payload: TransformToArrayOfIds(payload.result) });
      })
      .catch(error => {throw new Error(error);} );
  };
}


function shouldFetchDishes(state){
  var dishes = state.dishes;
  var dishesList = dishes.list;
  var now = Date.now();
  if(dishes.isFetching){
    return false;
  }else if(dishesList.length == 0){
    return true;
  }else{
    return (now - dishes.lastFetched > (5 * 60 * 1000)); // 5 minutos
  }
}

export function removeDish(item, restaurantId){
  return function removeDishThunk(dispatch){
    const {id} = item;
    deleteDish(id, restaurantId)
      .then(() => {
        dispatch({type: actionTypes.REMOVE_DISH, payload: id});
        dispatch(removeEntity(id, 'dishes'));
      })
      .catch(error => {throw new Error(error);});
  };
}

export function addOrEditDish(dish, restaurantId){
  return function addOrEditDishThunk(dispatch, getState){
    const {name, id} = dish;

    if(!id){
      createDish(dish, restaurantId)
        .then(payload => {
          dispatch(receiveEntities(payload.entities));
          dispatch({
            type: actionTypes.ADD_DISH,
            payload: payload.result
          });
          dispatch(closeDishesModal());
        })
        .catch(error => {throw new Error(error);} );
    }else{
      updateDish(dish, id, restaurantId)
        .then(payload => {
          dispatch(receiveEntities(payload.entities));
          dispatch(closeDishesModal());
        })
        .catch(error => {throw new Error(error);} );
    }
  };
}
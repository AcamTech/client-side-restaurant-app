import * as actionTypes from 'constants/action-types';

export function openCreateRestaurantModal(){
  return {
    type: actionTypes.OPEN_CREATE_RESTAURANT_MODAL
  };
}

export function closeCreateRestaurantModal(){
  return {
    type: actionTypes.CLOSE_CREATE_RESTAURANT_MODAL
  };
}

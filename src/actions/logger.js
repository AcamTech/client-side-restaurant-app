import * as actionTypes from 'constants/action-types';

export function showLogger(data){
  return {
    type: actionTypes.SHOW_LOGGER,
    payload: data
  };
}

export function closeLogger(){
  return {
    type: actionTypes.CLOSE_LOGGER
  };
}

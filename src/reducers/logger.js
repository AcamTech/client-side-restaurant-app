import * as actionTypes from 'constants/action-types';

export default function logger(state={
  isOpen: false,
  type: '',
  messages: ''
}, action){
  var {type, payload} = action;
  if(type.search(/REJECTED/) != -1){
    return {...state, isOpen: true, messages: payload, type: 'error'};
  }

  if(type == actionTypes.CLOSE_LOGGER){
    return {...state, isOpen: false, messages: '', type: ''};
  }

  return state;
}

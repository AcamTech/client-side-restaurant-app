import * as actionTypes from '../constants/action-types';

export default function staffModal(state={
  isOpen: false
}, action){
  var {type, payload} = action;
  switch(type){
    case actionTypes.OPEN_STAFF_MODAL:
      return {isOpen: true};
    case actionTypes.CLOSE_STAFF_MODAL:
      return {isOpen: false};
    default:
      return state;
  }
}

import * as actionTypes from '../constants/action-types';

export default function staffModal(state={
  isOpen: false,
  isEditting: false
}, action){
  var {type, payload} = action;
  switch(type){
    case actionTypes.OPEN_STAFF_MODAL:
      return {isOpen: true, isEditting: false};
    case actionTypes.CLOSE_STAFF_MODAL:
      return {isOpen: false, isEditting: false};
    case actionTypes.SELECT_MEMBER_TO_EDIT:
      return {...state, selectedMember: payload, isEditting: true};
    default:
      return state;
  }
}

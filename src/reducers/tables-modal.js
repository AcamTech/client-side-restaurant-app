import * as actionTypes from '../constants/action-types';

export default function tablesModal(state={
  isOpen: false,
  isEditting: false
}, action){
  var {type, payload} = action;
  switch(type){
    case actionTypes.OPEN_TABLES_MODAL:
      return {isOpen: true, isEditting: false};
    case actionTypes.CLOSE_TABLES_MODAL:
      return {isOpen: false, isEditting: false};
    case actionTypes.SELECT_TABLE_TO_EDIT:
      return {...state, selectedTable: payload, isEditting: true};
    default:
      return state;
  }
}

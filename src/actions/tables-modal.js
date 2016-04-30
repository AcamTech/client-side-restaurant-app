import * as actionTypes from 'constants/action-types';

export function openTablesModal(){
  return {
    type: actionTypes.OPEN_TABLES_MODAL
  };
}

export function closeTablesModal(){
  return {
    type: actionTypes.CLOSE_TABLES_MODAL
  };
}

export function editTable(id, table){
  return function(dispatch){
    dispatch(openTablesModal());
    dispatch({type: actionTypes.SELECT_TABLE_TO_EDIT, payload: Object.assign(table, {id: id})});
  };
}

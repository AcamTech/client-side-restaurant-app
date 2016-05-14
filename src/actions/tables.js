import Firebase from 'firebase';
import * as actionTypes from 'constants/action-types';
import {closeTablesModal} from './tables-modal';
import {receiveEntities, removeEntity} from './entities';
import {
  getTables, createTable,
  deleteTable, editTable
 } from 'helpers/api';
import {ref} from 'constants/firebase';
import { TransformToArrayOfIds } from 'helpers/format-helpers';

export function fetchTables(restaurantId){
  return function fetchTablesThunk(dispatch){
    getTables(restaurantId)
      .then(payload => {
        dispatch(receiveEntities(payload.entities));
        dispatch({
          type: actionTypes.FETCH_TABLES,
          payload: TransformToArrayOfIds(payload.result)
        });
        return payload;
      })
      .catch(err => console.error(err));
  };
}

export function removeTable(item, restaurantId){
  return function removeTableThunk(dispatch){
    var {id} = item;
    deleteTable(id, restaurantId)
      .then(() => {
        dispatch({type: actionTypes.REMOVE_TABLE, payload: id});
        dispatch(removeEntity(id, 'tables'));
      })
      .catch(error => {throw new Error(error);} );
  };
}

export function addOrEditTable(table, restaurantId){
  return function addOrEditTableThunk(dispatch, getState){
    const {number, id} = table;
    var tablesObject = getState().entities.tables;

    if(checkIfTableNumberExist(number, tablesObject)){
      dispatch({type: 'EDIT_TABLE_REJECTED', message: "The table number already exist"});
      return;
    }

    if(!id){
      createTable(table, restaurantId)
      .then((payload) => {
        dispatch(receiveEntities(payload.entities));
        dispatch({ type: actionTypes.ADD_TABLE, payload: payload.result });
        dispatch(closeTablesModal());
      })
      .catch(error => {throw new Error(error);} );
    }else{
      editTable({number})
        .then(() => dispatch(updateTable({ [id]: {number} })))
        .then(() => dispatch(closeTablesModal()))
        .catch(error => {throw new Error(error);} );
    }
  };
}

function checkIfTableNumberExist(number, tables){
  var numbers = Object.keys(tables)
    .map(item => tables[item].number);
   return numbers.indexOf(number) != -1;
}

function updateTable(table){
  return {
    type: actionTypes.UPDATE_TABLE,
    payload: table
  };
}

import Firebase from 'firebase';
import * as actionTypes from 'constants/action-types';
import {closeTablesModal} from './tables-modal';
import {ref} from 'constants/firebase';

export function fetchTables(restaurantId){
  return function fetchTablesThunk(dispatch){
    const tablesRef = ref.child(`restaurants/${restaurantId}/tables`);
    tablesRef.once('value')
      .then(snapshot => {
        dispatch({ type: actionTypes.FETCH_TABLES, payload: snapshot.val() });
      });
  };
}

export function removeTable(item, restaurantId){
  return function removeTableThunk(dispatch){
    var {id} = item;
    ref.child(`restaurants/${restaurantId}/tables/${id}`)
      .remove()
      .then(() => dispatch({type: actionTypes.REMOVE_TABLE, payload: item}))
      .catch(error => {throw new Error(error);} );
  };
}

export function addOrEditTable(table, restaurantId){
  return function addOrEditTableThunk(dispatch, getState){
    const {number, id} = table;
    const tablesRef = ref.child(`restaurants/${restaurantId}/tables`);

    if(!id){
      const newTableRef = tablesRef.push();
      const tableId = newTableRef.key();

      newTableRef.set({
        number
      }).then(() => {
        dispatch({ type: actionTypes.ADD_TABLE, payload: {[tableId]: table} });
        dispatch(closeTablesModal());
      })
      .catch(error => {throw new Error(error);} );
    }else{
      var tablesObject = getState().tables.list;
      var numbers = Object.keys(tablesObject).map(item => tablesObject[item].number);

      if(numbers.indexOf(number) != -1){
        dispatch({type: 'EDIT_TABLE_REJECTED', message: "The table number already exist"});
        return;
      }
      tablesRef.child(id)
        .update({number})
        .then(() => dispatch(updateTable({ [id]: {number} })))
        .then(() => dispatch(closeTablesModal()))
        .catch(error => {throw new Error(error);} );
    }
  };
}

function updateTable(table){
  return {
    type: actionTypes.UPDATE_TABLE,
    payload: table
  };
}

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

export function addOrEditTable(table, restaurantId){
  return function addOrEditTableThunk(dispatch){
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
      .catch(error => console.error(error));
    }else{
      tablesRef.child(id)
        .update({number})
        // .then(() => dispatch(updateStaffMember({ [id]: {email, name, restaurant: restaurantId} })))
        // .then(() => dispatch(closeStaffModal()))
        // .catch(error => console.error(error));
    }
  };
}

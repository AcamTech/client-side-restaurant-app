import Firebase from 'firebase';
import * as actionTypes from 'constants/action-types';
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

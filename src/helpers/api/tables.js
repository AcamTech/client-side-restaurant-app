import { normalize, Schema, valuesOf } from 'normalizr';
import Firebase, {ref} from 'constants/firebase';

var tablesSchema = new Schema('tables');

export function getTables(restaurantId) {
  return ref.child(`restaurants/${restaurantId}/tables`)
    .once('value')
    .then(snapshot => snapshot.val())
    .then(response => normalize(response || {}, valuesOf(tablesSchema)));
}

export function getTable(tableId, restaurantId){
  return ref.child(`restaurants/${restaurantId}/tables/${tableId}`)
    .once('value')
    .then(snapshot => snapshot.val())
    .then(response => normalize(response || {}, tablesSchema));
}

export function createTable(table, restaurantId){
  var number = table.number;
  var tableRef = ref.child(`restaurants/${restaurantId}/tables`);
  var newRef = tableRef.push();
  var tableId = newRef.key();
  return newRef.set({
    id: tableId,
    number,
    createdAt: Firebase.ServerValue.TIMESTAMP,
    updatedAt: Firebase.ServerValue.TIMESTAMP
  })
  .then(() => getTable(tableId, restaurantId));
}

export function editTable(data, restaurantId){
  return ref.child(`restaurants/${restaurantId}/tables`)
    .update(Object.assign({}, data, {
      updatedAt: Firebase.ServerValue.TIMESTAMP
    }));
}

export function deleteTable(tableId, restaurantId){
  return ref.child(`restaurants/${restaurantId}/tables/${tableId}`)
    .remove();
}
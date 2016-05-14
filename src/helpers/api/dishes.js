import Firebase, {ref} from 'constants/firebase';
import { normalize, Schema, valuesOf } from 'normalizr';
import {ArrayToObject} from 'helpers/format-helpers';

var dishesSchema = new Schema('dishes');

export function getDishes(restaurantId){
  return ref.child(`restaurants/${restaurantId}/dishes`)
    .once('value')
    .then(snapshot => snapshot.val())
    .then(response => normalize(response || {}, valuesOf(dishesSchema)));
}

export function getDish(dishId, restaurantId){
   return ref.child(`restaurants/${restaurantId}/dishes/${dishId}`)
    .once('value')
    .then(snapshot => snapshot.val())
    .then(response => normalize(response || {}, dishesSchema));
}

export function deleteDish(dishId, restaurantId){
  return ref.child(`restaurants/${restaurantId}/dishes/${dishId}`)
    .remove();
}

export function createDish(dish, restaurantId){
  var catRef = ref.child(`restaurants/${restaurantId}/dishes`);
  var newCatRef = catRef.push();
  var dishId = newCatRef.key();
  return newCatRef.set(
    Object.assign({}, dish, {
      id: dishId,
      createdAt: Firebase.ServerValue.TIMESTAMP,
      updatedAt: Firebase.ServerValue.TIMESTAMP
    })
  )
    .then(() => getDish(dishId, restaurantId));
}

export function updateDish(dish, dishId, restaurantId){
  return ref.child(`restaurants/${restaurantId}/dishes/${dishId}`)
    .update(
      Object.assign({}, dish, {
        updatedAt: Firebase.ServerValue.TIMESTAMP
      })
    )
    .then(() => getDish(dishId, restaurantId));
}
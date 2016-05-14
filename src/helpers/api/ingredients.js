import Firebase, {ref} from 'constants/firebase';
import { normalize, Schema, valuesOf } from 'normalizr';
import {ArrayToObject} from 'helpers/format-helpers';

var ingredientSchema = new Schema('ingredients');

export function getIngredients(restaurantId){
  return ref.child(`restaurants/${restaurantId}/ingredients`)
    .once('value')
    .then(snapshot => snapshot.val())
    .then(response => normalize(response || {}, valuesOf(ingredientSchema)));
}

export function getIngredient(ingredientId, restaurantId){
   return ref.child(`restaurants/${restaurantId}/ingredients/${ingredientId}`)
    .once('value')
    .then(snapshot => snapshot.val())
    .then(response => normalize(response || {}, ingredientSchema));
}

export function deleteIngredient(ingredientId, restaurantId){
  return ref.child(`restaurants/${restaurantId}/ingredients/${ingredientId}`)
    .remove();
}

export function createIngredient(ingredient, restaurantId){
  var itemRef = ref.child(`restaurants/${restaurantId}/ingredients`);
  var newItemRef = itemRef.push();
  var ingredientId = newItemRef.key();
  return newItemRef.set(
    Object.assign({}, ingredient, {
      id: ingredientId,
      createdAt: Firebase.ServerValue.TIMESTAMP,
      updatedAt: Firebase.ServerValue.TIMESTAMP
    })
  )
  .then(() => getIngredient(ingredientId, restaurantId));
}

export function updateIngredient(ingredient, ingredientId, restaurantId){
  return ref.child(`restaurants/${restaurantId}/ingredients/${ingredientId}`)
    .update(
      Object.assign({}, ingredient, {
        updatedAt: Firebase.ServerValue.TIMESTAMP
      })
    )
    .then(() => getIngredient(ingredientId, restaurantId));
}
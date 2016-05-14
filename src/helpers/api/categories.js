import Firebase, {ref} from 'constants/firebase';
import { normalize, Schema, valuesOf } from 'normalizr';
import {ArrayToObject} from 'helpers/format-helpers';

var categoriesSchema = new Schema('categories');

export function getCategories(restaurantId){
  return ref.child(`restaurants/${restaurantId}/categories`)
    .once('value')
    .then(snapshot => snapshot.val())
    .then(response => normalize(response || {}, valuesOf(categoriesSchema)));
}

export function getCategory(categoryId, restaurantId){
   return ref.child(`restaurants/${restaurantId}/categories/${categoryId}`)
    .once('value')
    .then(snapshot => snapshot.val())
    .then(response => normalize(response || {}, categoriesSchema));
}

export function deleteCategory(categoryId, restaurantId){
  return ref.child(`restaurants/${restaurantId}/categories/${categoryId}`)
    .remove();
}

export function createCategory(name, restaurantId){
  var catRef = ref.child(`restaurants/${restaurantId}/categories/`);
  var newCatRef = catRef.push();
  var catId = newCatRef.key();
  return newCatRef.set(
    Object.assign({}, {name}, {
      id: catId,
      createdAt: Firebase.ServerValue.TIMESTAMP,
      updatedAt: Firebase.ServerValue.TIMESTAMP
    })
  )
    .then(() => getCategory(catId, restaurantId));
}

export function updateCategory(name, categoryId, restaurantId){
  return ref.child(`restaurants/${restaurantId}/categories/${categoryId}`)
    .update(
      Object.assign({}, {name}, {
        updatedAt: Firebase.ServerValue.TIMESTAMP
      })
    )
    .then(() => getCategory(categoryId, restaurantId));
}
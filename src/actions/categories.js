import Firebase from 'firebase';
import * as actionTypes from 'constants/action-types';
import {closeCategoriesModal} from './categories-modal';
import {ref} from 'constants/firebase';

export function fetchCategories(restaurantId){
  return function fetchCategoriesThunk(dispatch){
    const categoriesRef = ref.child(`restaurants/${restaurantId}/categories`);
    categoriesRef.once('value')
      .then(snapshot => {
        dispatch({ type: actionTypes.FETCH_CATEGORIES, payload: snapshot.val() });
      });
  };
}

export function removeCategory(item, restaurantId){
  return function removeCategoryThunk(dispatch){
    const {id} = item;
    ref.child(`restaurants/${restaurantId}/categories/${id}`)
      .remove()
      .then(() => dispatch({type: actionTypes.REMOVE_CATEGORY, payload: item}))
      .catch(error => {throw new Error(error);} );
  };
}

export function addOrEditCategory(category, restaurantId){
  return function addOrEditCategoryThunk(dispatch, getState){
    const {name, id} = category;
    const catsRef = ref.child(`restaurants/${restaurantId}/categories`);

    if(!id){
      addCategory(name, dispatch, catsRef);
    }else{
      editCategory(id, name, dispatch, catsRef);
    }
  };
}

function addCategory(name, dispatch, catsRef) {
  const newCatRef = catsRef.push();
  const catId = newCatRef.key();

  newCatRef.set({ name })
    .then(() => {
      dispatch({ type: actionTypes.ADD_CATEGORY, payload: {[catId]: { name }} });
      dispatch(closeCategoriesModal());
    })
    .catch(error => {throw new Error(error);} );
}

function editCategory(id, name, dispatch, catsRef){
  catsRef.child(id)
    .update({name})
    .then(() => dispatch(updateCategory({ [id]: {name} })))
    .then(() => dispatch(closeCategoriesModal()))
    .catch(error => {throw new Error(error);} );
}

function updateCategory(category) {
  return {
    type: actionTypes.UPDATE_CATEGORY,
    payload: category
  };
}

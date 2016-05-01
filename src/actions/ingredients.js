import Firebase from 'firebase';
import * as actionTypes from 'constants/action-types';
import {closeIngredientsModal} from './ingredients-modal';
import {ref} from 'constants/firebase';

export function fetchIngredients(restaurantId){
  return function fetchIngredientsThunk(dispatch){
    const ingredientsRef = ref.child(`restaurants/${restaurantId}/ingredients`);
    ingredientsRef.once('value')
      .then(snapshot => {
        dispatch({ type: actionTypes.FETCH_INGREDIENTS, payload: snapshot.val() });
      });
  };
}

export function removeIngredient(item, restaurantId){
  return function removeIngredientThunk(dispatch){
    const {id} = item;
    ref.child(`restaurants/${restaurantId}/ingredients/${id}`)
      .remove()
      .then(() => dispatch({type: actionTypes.REMOVE_INGREDIENT, payload: item}))
      .catch(error => {throw new Error(error);} );
  };
}

export function addOrEditIngredient(ingredient, restaurantId){
  return function addOrEditIngredientThunk(dispatch, getState){
    const {name, id} = ingredient;
    const ingredientsRef = ref.child(`restaurants/${restaurantId}/ingredients`);

    if(!id){
      addIngredient(name, dispatch, ingredientsRef);
    }else{
      editIngredient(id, name, dispatch, ingredientsRef);
    }
  };
}

function addIngredient(name, dispatch, ref) {
  const newCatRef = ref.push();
  const catId = newCatRef.key();

  newCatRef.set({ name })
    .then(() => {
      dispatch({ type: actionTypes.ADD_INGREDIENT, payload: {[catId]: { name }} });
      dispatch(closeIngredientsModal());
    })
    .catch(error => {throw new Error(error);} );
}

function editIngredient(id, name, dispatch, ref){
  ref.child(id)
    .update({name})
    .then(() => dispatch(updateIngredient({ [id]: {name} })))
    .then(() => dispatch(closeIngredientsModal()))
    .catch(error => {throw new Error(error);} );
}

function updateIngredient(ingredient) {
  return {
    type: actionTypes.UPDATE_INGREDIENT,
    payload: ingredient
  };
}

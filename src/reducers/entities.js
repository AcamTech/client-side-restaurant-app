import * as actionTypes from 'constants/action-types';
import merge from 'lodash.merge';

export default function entities(state = {
  categories: {},
  ingredients: {},
  restaurants: {},
  staff: {},
  dishes: {},
  orders: {},
  tables: {}
}, action){
  var {type, payload} = action;
  switch(type){
    case actionTypes.RECEIVE_ENTITIES:
      return merge({}, state, payload);
    case actionTypes.REMOVE_ENTITY:
      var {entity} = action;
      delete state[entity][payload];
      return merge({}, state);
    default:
      return state;
  }
}

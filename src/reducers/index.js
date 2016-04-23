import { combineReducers } from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import {reducer as form} from 'redux-form';
import restaurants from './restaurants';
import createRestaurantModal from './create-restaurant-modal';

const rootReducer = combineReducers({
  restaurants,
  form,
  createRestaurantModal,
  routing
});

export default rootReducer;

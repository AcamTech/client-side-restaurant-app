import { combineReducers } from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import {reducer as form} from 'redux-form';
import restaurants from './restaurants';
import createRestaurantModal from './create-restaurant-modal';
import staff from './staff';

const rootReducer = combineReducers({
  restaurants,
  createRestaurantModal,
  staff,
  form,
  routing
});

export default rootReducer;

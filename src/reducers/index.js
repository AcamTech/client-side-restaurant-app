import { combineReducers } from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import {reducer as form} from 'redux-form';
import restaurants from './restaurants';
import createRestaurantModal from './create-restaurant-modal';
import staff from './staff';
import staffModal from './staff-modal';

const rootReducer = combineReducers({
  restaurants,
  createRestaurantModal,
  staff,
  staffModal,
  form,
  routing
});

export default rootReducer;

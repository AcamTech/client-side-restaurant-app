import { combineReducers } from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import {reducer as form} from 'redux-form';
import restaurants from './restaurants';
import createRestaurantModal from './create-restaurant-modal';
import staff from './staff';
import staffModal from './staff-modal';
import tables from './tables';

const rootReducer = combineReducers({
  restaurants,
  createRestaurantModal,
  staff,
  staffModal,
  tables,
  form,
  routing
});

export default rootReducer;

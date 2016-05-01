import { combineReducers } from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import {reducer as form} from 'redux-form';
import restaurants from './restaurants';
import createRestaurantModal from './create-restaurant-modal';
import staff from './staff';
import staffModal from './staff-modal';
import tables from './tables';
import tablesModal from './tables-modal';
import categories from './categories';
import categoriesModal from './categories-modal';
import ingredients from './ingredients';
import ingredientsModal from './ingredients-modal';

const rootReducer = combineReducers({
  restaurants,
  createRestaurantModal,
  staff,
  staffModal,
  tables,
  tablesModal,
  categories,
  categoriesModal,
  form,
  routing,
  ingredients,
  ingredientsModal
});

export default rootReducer;

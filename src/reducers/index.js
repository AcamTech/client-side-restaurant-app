import { combineReducers } from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import {reducer as form} from 'redux-form';
import categories from './categories';
import categoriesModal from './categories-modal';
import createRestaurantModal from './create-restaurant-modal';
import dishes from './dishes';
import dishesModal from './dishes-modal';
import entities from './entities';
import ingredients from './ingredients';
import ingredientsModal from './ingredients-modal';
import logger from './logger';
import orders from './orders';
import restaurants from './restaurants';
import restaurantShow from './restaurant-show';
import staff from './staff';
import staffModal from './staff-modal';
import tables from './tables';
import tablesModal from './tables-modal';

const rootReducer = combineReducers({
  categories,
  categoriesModal,
  createRestaurantModal,
  dishes,
  dishesModal,
  entities,
  form,
  ingredients,
  ingredientsModal,
  logger,
  orders,
  restaurants,
  restaurantShow,
  routing,
  staff,
  staffModal,
  tables,
  tablesModal
});

export default rootReducer;

import { combineReducers } from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import restaurants from './restaurants';

const rootReducer = combineReducers({
  restaurants,
  routing
});

export default rootReducer;

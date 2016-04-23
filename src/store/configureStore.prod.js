import { createStore, applyMiddleware, compose } from 'redux';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';
import reduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from '../reducers';

export default function configureStore(initialState, history) {
  const reduxRouterMiddleware = routerMiddleware(history);
  const middleware = [reduxThunk, promiseMiddleware(), reduxRouterMiddleware];

  let finalCreateStore = compose(
    applyMiddleware(...middleware)
  )(createStore);

  const store = finalCreateStore(rootReducer, initialState);
  const enhancedHistory = syncHistoryWithStore(history, store);

  return {store, history: enhancedHistory};
}

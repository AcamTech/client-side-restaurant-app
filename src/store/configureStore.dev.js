//This file merely configures the store for hot reloading.
//This boilerplate file is likely to be the same for each project that uses Redux.
//With Redux, the actual stores are in /reducers.

import { createStore, applyMiddleware, compose } from 'redux';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';
import reduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore(initialState, history) {
  const logger = createLogger({
    duration: true
  });
  const reduxRouterMiddleware = routerMiddleware(history);
  const middleware = [reduxThunk, promiseMiddleware(), reduxRouterMiddleware, logger];

  let finalCreateStore = compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  const store = finalCreateStore(rootReducer, initialState);
  const enhancedHistory = syncHistoryWithStore(history, store);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return {store, history: enhancedHistory};
}

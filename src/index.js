import 'babel-polyfill';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import {render} from 'react-dom';
import { browserHistory } from 'react-router';
import App from './app';
import './styles/main.scss';
import {buildCheckIfAuthed} from 'helpers/auth';
var configureStore = require('./store/configureStore');

const {store, history} = configureStore({}, browserHistory);

const checkIfAuthed = buildCheckIfAuthed(store);

var rootEl = document.getElementById('app');

render(
  <AppContainer>
    <App store={store} history={history} checkIfAuthed={checkIfAuthed} />
  </AppContainer>, rootEl
);

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;
    render(
      <AppContainer>
         <NextApp store={store} history={history} checkIfAuthed={checkIfAuthed} />
      </AppContainer>,
      rootEl
    );
  });
}

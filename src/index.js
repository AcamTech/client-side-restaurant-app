import { AppContainer } from 'react-hot-loader';
import React from 'react';
import {render} from 'react-dom';
import App from './app';
import './styles/main.scss';

var rootEl = document.getElementById('app');

render(
  <AppContainer>
    <App />
  </AppContainer>, rootEl
);

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;
    render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      rootEl
    );
  });
}

import { AppContainer } from 'react-hot-loader';
import React from 'react';
import {render} from 'react-dom';
import { browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import App from './app';
import './styles/main.scss';
import {redirectToUserRoot} from 'actions/staff';
import {checkAuthed, getMember} from 'helpers/auth';

const {store, history} = configureStore({}, browserHistory);

var routesPrivileges = {
  admin: /^admin/,
  waiter: /^ordenes/,
  kitchen: /^cocina/
};

function isValidRoute(member, path) {
  var matches = path.match(/\/restaurante\/([^\/]*)\/(.*)/);

  var restaurantId = matches[1];
  var shortPath = matches[2];

  if (restaurantId === member.restaurant) {
    return routesPrivileges[member.role].test(shortPath);
  } else {
    return false;
  }
}

export function checkIfAuthed(nextState, replace, callback){
  var isAuthed = checkAuthed(store);
  var nextStatePath = nextState.location.pathname;

  var staff = store.getState().staff;
  var member = staff.list[staff.authedId];

  // TODO: Clean this thing
  if (nextStatePath == '/login' || nextStatePath == '/') {
    if (isAuthed == true) {
      if (member && member.role) {
        redirectToUserRoot(member, replace);
        callback();
      } else {
        getMember(staff.authedId)
          .then((member) => {
            redirectToUserRoot(member, replace);
            callback();
          });
      }
    } else {
      callback();
    }
  } else {
    if (isAuthed == false) {
      replace('/login');
      callback();
    } else {
      if (member && member.role) {
        if (isValidRoute(member, nextStatePath)) {
          callback();
        } else {
          redirectToUserRoot(member, replace);
          callback();
        }
      } else {
        getMember(staff.authedId)
          .then((member) => {
            if (isValidRoute(member, nextStatePath)) {
              callback();
            } else {
              redirectToUserRoot(member, replace);
              callback();
            }
          });
      }
    }
  }
}

var rootEl = document.getElementById('app');

render(
  <AppContainer>
    <App store={store} history={history} />
  </AppContainer>, rootEl
);

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;
    render(
      <AppContainer>
         <NextApp store={store} history={history} />
      </AppContainer>,
      rootEl
    );
  });
}

import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import getRoutes from './routes';
import {checkAuthed, getMember} from 'helpers/auth';
import configureStore from './store/configureStore';
import {redirectToUserRoot} from 'actions/staff';

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

function checkIfAuthed(nextState, replace, callback){
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

export default function App(){
  return (
    <Provider store={store}>
      {getRoutes(history, checkIfAuthed)}
    </Provider>
  );
}

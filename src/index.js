import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import getRoutes from './routes';
import {checkAuthed, getMember} from 'helpers/auth';
import configureStore from './store/configureStore';
import './styles/main.scss';

const {store, history} = configureStore({}, browserHistory);

function checkIfAuthed(nextState, replace, callback){
  var isAuthed = checkAuthed(store);
  var nextStatePath = nextState.location.pathname;
  var restaurantId;
  if(nextStatePath == '/login' || nextStatePath == '/'){
    if(isAuthed == true){
      var {staff: {authedId}} = store.getState();
      getMember(authedId)
        .then(({restaurant}) => {
          replace('/restaurante/'+restaurant);
          callback();
        });
    }
  }else{
    if(isAuthed == false){
      replace('/login');
    }
  }
  callback();
}

render(
  <Provider store={store}>
    {getRoutes(history, checkIfAuthed)}
  </Provider>, document.getElementById('app')
);

import React, {PropTypes} from 'react';
import { Provider } from 'react-redux';
import getRoutes from './routes';
import { checkIfAuthed }  from '/';

export default function App({store, history}){
  return (
    <Provider store={store}>
      {getRoutes(history, checkIfAuthed)}
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

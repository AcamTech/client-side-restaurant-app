import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBFBxXiJtOFEbDYqocGtsZC59xQPNPQiNw',
  authDomain: 'toque-app.firebaseapp.com',
  databaseURL: 'https://toque-app.firebaseio.com',
  projectId: 'toque-app',
  storageBucket: 'toque-app.appspot.com',
  messagingSenderId: '659847398721'
});

export const ref = app.database().ref();
export const Auth = app.auth();
export default app;

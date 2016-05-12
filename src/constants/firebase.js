import Firebase from 'firebase';

const firebaseUrl = 'https://toque-app.firebaseio.com/';

export const ref = new Firebase(firebaseUrl);
export default Firebase;

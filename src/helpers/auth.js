import {ref} from 'constants/firebase';
import { generateRandomPassword } from 'helpers/format-helpers';

export function createUserWithEmail(email){
  return ref.createUser({
    email,
    password: generateRandomPassword()
  });
}

export default function auth (user) {
  return ref.authWithPassword(user);
}

export function logout () {
  ref.unauth();
}

export function saveUser (user) {
  return ref.child(`users/${user.uid}`)
    .set(user)
    .then(() => user);
}

export function checkIfAuthed (store) {
  const authData = ref.getAuth();
  if (authData === null) {
    return false;
  } else if (store.getState().users.get('isAuthed') === false) {
    const { facebook, uid } = authData;
    //const userInfo = formatUserInfo(facebook.displayName, facebook.profileImageURL, uid);
    //store.dispatch(authUser(uid));
    //store.dispatch(fetchingUserSuccess(uid, userInfo, Date.now()));
  }
  return true;
}

import {ref} from 'constants/firebase';
import { authMember, fetchingMemberSuccess } from 'actions/staff';
import { generateRandomPassword, formatUserInfo } from 'helpers/format-helpers';

export function createUserWithEmail(email){
  return ref.createUser({
    email,
    password: generateRandomPassword()
  });
}

export function auth(user) {
  return ref.authWithPassword(user);
}

export function logout () {
  ref.unauth();
}

export function saveMember({uid, userData}) {
  return ref.child(`restaurants_staff/${uid}`)
    .update(userData)
    .then(() => userData);
}

export function getMember(uid) {
  return ref.child(`restaurants_staff/${uid}`)
    .once('value')
    .then(snapshot => {
      return snapshot.val();
    });
}

export function checkAuthed (store) {
  const authData = ref.getAuth();
  if (authData === null) {
    return false;
  } else if (store.getState().staff.isAuthed === false) {
    const { password, uid } = authData;
    const userInfo = formatUserInfo(password.isTemporaryPassword, password.profileImageURL, uid);
    store.dispatch(authMember(uid));
    store.dispatch(fetchingMemberSuccess(uid, userInfo));
  }
  return true;
}

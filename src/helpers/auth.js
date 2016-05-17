import Firebase, {ref} from 'constants/firebase';
import { fetchingMemberSuccess, getAuthedMember } from 'actions/staff';
import {authMember} from 'actions/auth';
import { generateRandomPassword, formatUserInfo } from 'helpers/format-helpers';
import { getMember, updateMember }from 'helpers/api';

export function createUserWithEmail(email){
  return ref.createUser({
    email,
    password: generateRandomPassword()
  });
}

export function resetMemberPassword(data){
  return ref.resetPassword(data);
}

export function auth(user) {
  return ref.authWithPassword(user).then(({password, uid}) => {
    var userData = formatUserInfo(
      password.isTemporaryPassword,
      password.profileImageURL,
      uid
    );
    return {uid, userData};
  });
}

export function logout () {
  ref.unauth();
}

export function updatePassword(password){
  return ref.changePassword(password);
}

var routesPrivileges = {
  admin: /^admin/,
  waiter: /^ordenes/,
  kitchen: /^cocina/
};

function isValidRoute(member, path) {
  var matches = path.match(/\/restaurante\/([^\/]*)\/(.*)/);

  var restaurantId = matches && matches[1];
  var shortPath = matches && matches[2];

  if(member.role == 'super'){
    return true;
  }

  if (restaurantId === member.restaurant) {
    return routesPrivileges[member.role].test(shortPath);
  } else {
    return false;
  }
}

export function redirectToUserRoot(member, replace) {
  var path = '/restaurante/'+member.restaurant;
  var {role} = member;
  console.warn(member);
  switch (role) {
    case 'admin':
      replace(path + '/admin');
      break;
    case 'waiter':
      replace(path + '/ordenes');
      break;
    case 'kitchen':
      replace(path + '/cocina');
      break;
    case 'super':
      replace('super');
      break;
    default:
      replace('/login');
  }
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

export function buildCheckIfAuthed(store){
  return function checkIfAuthed(nextState, replace, callback){
    var isAuthed = checkAuthed(store);
    var nextStatePath = nextState.location.pathname;

    var state = store.getState();
    var staff = state.staff;
    var member = state.entities.staff[staff.authedId];

    // TODO: Clean this thing
    if (nextStatePath == '/login' || nextStatePath == '/') {
      if (isAuthed == true) {
        if (member && member.role) {
          redirectToUserRoot(member, replace);
          callback();
        } else {
          store.dispatch(getAuthedMember(staff.authedId))
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
            .then((payload) => {
              var {result, entities} = payload;
              var member = entities.staff[result];
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
  };
}

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

  var restaurantId = matches[1];
  var shortPath = matches[2];

  if (restaurantId === member.restaurant) {
    return routesPrivileges[member.role].test(shortPath);
  } else {
    return false;
  }
}


export function redirectToUserRoot(member, replace) {
  var path = '/restaurante/'+member.restaurant;
  var {role} = member;

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
    default:
      replace('/login');
  }
}

export function buildCheckIfAuthed(store){
  return function checkIfAuthed(nextState, replace, callback){
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
  };
}

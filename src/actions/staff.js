import Firebase from 'firebase';
import { push, replace } from 'react-router-redux';
import * as actionTypes from 'constants/action-types';
import { closeStaffModal } from './staff-modal';
import { ref } from 'constants/firebase';
import { fetchStaffFromRestaurant } from 'helpers/api';
import { auth, saveMember, getMember, createUserWithEmail, updatePassword } from 'helpers/auth';
import { formatUserInfo } from 'helpers/format-helpers';

export function addOrEditStaffMember(staffMember, restaurantId){
  return function addOrEditStaffMemberThunk(dispatch){
    const {email, name, id} = staffMember;
    if(!email){
      throw new Error('No se encontro el email');
    }
    if(!id){
      createUserWithEmail(email)
        .then(({uid}) => uid)
        .then(uid => {
          var object = {...staffMember, restaurant: restaurantId};
          delete object.id;
          ref.child(`restaurants_staff/${uid}`)
            .set(object);
          return [object, uid];
        })
        .then((member) => {
          var [object, uid] = member;
          ref.child(`restaurants/${restaurantId}/waiters`).update({
            [uid]: true
          },() => {
            dispatch({
              type: actionTypes.ADD_STAFF_MEMBER,
              payload: {[uid]: object}
            });
            dispatch(closeStaffModal());
          });
        })
        .then(() => {
          return ref.resetPassword({email});
        })
        .catch(error => {throw new Error(error);} );
    }else{
      ref.child(`restaurants_staff/${id}`)
        .update({email, name})
        .then(() => dispatch(updateStaffMember({ [id]: {email, name, restaurant: restaurantId} })))
        .then(() => dispatch(closeStaffModal()))
        .catch(error => {throw new Error(error);} );
    }
  };
}

export function fetchStaff(restaurantId){
  return function fetchStaffThunk(dispatch, getState){
    fetchStaffFromRestaurant(restaurantId)
      .then(staff => Object.keys(staff))
      .then(arrayStaff => arrayStaff.map(member => {
          return ref.child(`restaurants_staff/${member}`)
            .once('value')
            .then(snapshot => ({[snapshot.key()]: snapshot.val()}));
        }
      ))
      .then(members => Promise.all(members))
      .then(members => members.reduce( (initialVal, item) => {
        Object.assign(initialVal, item);
        return initialVal;
      }, {} ))
      .then(members => {
        dispatch({type: actionTypes.FETCH_STAFF, payload: members});
        return members;
      });
  };
}

export function updateStaffMember(member){
  return {
    type: actionTypes.UPDATE_STAFF_MEMBER,
    payload: member
  };
}

export function removeStaffMember(member, restaurantId){
  return function removeStaffMemberThunk(dispatch){
    const {id} = member;
    const memberRef = ref.child(`restaurants/${restaurantId}/waiters/${id}`);
    memberRef.remove(() => {
      const memberRef = ref.child(`restaurants_staff/${id}`);
      memberRef.remove(() => {
        const blockedMemberRef = ref.child(`blocked_users`)
          .set({
            [id] : true
          });
        dispatch({type: actionTypes.REMOVE_STAFF_MEMBER, payload: id});
      });
    });
  };
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

export function authenticateUser(user){
  return function authenticateUserThunk(dispatch){
    function redirect(path) {
      dispatch(push(path));
    }

    dispatch(fetchingMember());
    auth(user)
      .then(({password, uid}) => {
        var userData = formatUserInfo(password.isTemporaryPassword, password.profileImageURL, uid);
        return saveMember({uid, userData});
      })
      .then(userData => {
        var {uid} = userData;
        return getMember(uid);
      })
      .then(userData => {
        var {uid} = userData;
        dispatch(fetchingMemberSuccess(uid, userData));
        return {uid, userData};
      })
      .then((member) => {
        var {uid} = member;
        dispatch(authMember(uid));
        return member;
      })
      .then(({userData}) => redirectToUserRoot(userData, redirect))
      .catch(error => {throw new Error(error);});
  };
}

export function unauth(){
  return function unauthThunk(dispatch){
    ref.unauth();
    dispatch({type: 'UNAUTH_MEMBER'});
    dispatch(replace('/'));
  };
}

export function authMember(uid){
  return {
    type: actionTypes.AUTH_MEMBER,
    payload: uid
  };
}

export function fetchingMemberSuccess(uid, userData){
  return {
    type: actionTypes.FETCH_MEMBER_SUCCESS,
    payload: {
      uid,
      userData
    }
  };
}

export function changePasswordAction(data){
  return {
    type: 'UPDATE_PASSWORD',
    payload: updatePassword(data)
  };
}

function fetchingMember(){
  return {
    type: actionTypes.FETCHING_MEMBER
  };
}

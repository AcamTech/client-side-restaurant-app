import { push, replace } from 'react-router-redux';
import * as actionTypes from 'constants/action-types';
import { closeStaffModal } from './staff-modal';
import {receiveEntities} from './entities';
import {
  auth, updatePassword,
  redirectToUserRoot, resetMemberPassword,
  logout
} from 'helpers/auth';
import { formatUserInfo, TransformToArrayOfIds } from 'helpers/format-helpers';
import {
  fetchStaffFromRestaurant, getMember,
  updateMember, destroyMember,
  createAndSaveUser
} from 'helpers/api';

export function addOrEditStaffMember(staffMember, restaurantId){
  return function addOrEditStaffMemberThunk(dispatch){
    const {email, name, uid} = staffMember;
    if(!email){
      throw new Error('No se encontro el email');
    }
    if(!uid){
       createAndSaveUser(staffMember, restaurantId)
        .then((payload) => {
            dispatch(receiveEntities(payload.entities));
            dispatch({type: actionTypes.ADD_STAFF_MEMBER, payload: [payload.result]});
            dispatch(closeStaffModal());
        })
        .then(() => dispatch(resetPassword({email})))
        .catch(error => {throw new Error(error);} );
    }else{
      updateMember(staffMember)
        .then(payload => dispatch(receiveEntities(payload.entities)))
        .then(() => dispatch(closeStaffModal()))
        .catch(error => {throw new Error(error);} );
    }
  };
}

export function fetchStaff(restaurantId){
  return function fetchStaffThunk(dispatch, getState){
    fetchStaffFromRestaurant(restaurantId)
      .then(payload => {
        dispatch(receiveEntities(payload.entities));
        dispatch({type: actionTypes.FETCH_STAFF, payload: TransformToArrayOfIds(payload.result)});
        return payload;
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
    const {uid} = member;
    return destroyMember(uid, restaurantId)
      .then(() => {
        dispatch({type: actionTypes.REMOVE_STAFF_MEMBER, payload: uid});
      });
  };
}

export function getAuthedMember(uid){
  return function(dispatch){
    return getMember(uid)
      .then(payload => {
        dispatch(receiveEntities(payload.entities));
        return payload;
      })
      .catch(err => console.error(err));
  };
}

export function authenticateUser(user){
  return function authenticateUserThunk(dispatch){
    function redirect(path) {
      dispatch(push(path));
    }

    dispatch(fetchingMember());
    auth(user)
      .then(({password, uid}) => {
        var userData = formatUserInfo(
          password.isTemporaryPassword,
          password.profileImageURL,
          uid
        );
        return updateMember({uid, userData});
      })
      .then(payload => {
        var uid = payload.result;
        var entities = payload.entities;
        var staff = entities.staff;
        var member = staff[uid];
        dispatch(receiveEntities(entities));
        dispatch(fetchingMemberSuccess(uid));
        return member;
      })
      .then((member) => {
        var {uid} = member;
        dispatch(authMember(uid));
        return member;
      })
      .then((userData) => redirectToUserRoot(userData, redirect))
      .catch(error => {throw new Error(error);});
  };
}

export function unauth(){
  return function unauthThunk(dispatch){
    logout();
    dispatch({type: 'UNAUTH_MEMBER'});
    dispatch(replace('/'));
  };
}

export function resetPassword(data){
  return {
    type: 'RESET_PASSWORD',
    payload: resetMemberPassword(data)
  };
}

export function authMember(uid){
  return {
    type: actionTypes.AUTH_MEMBER,
    payload: uid
  };
}

export function fetchingMemberSuccess(uid){
  return {
    type: actionTypes.FETCH_MEMBER_SUCCESS,
    payload: uid
  };
}

function fetchingMember(){
  return {
    type: actionTypes.FETCHING_MEMBER
  };
}

export function changePasswordAction(data){
  return {
    type: 'UPDATE_PASSWORD',
    payload: updatePassword(data)
  };
}
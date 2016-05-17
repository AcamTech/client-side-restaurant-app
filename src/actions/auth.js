import { push, replace } from 'react-router-redux';
import * as actionTypes from 'constants/action-types';
import {receiveEntities} from './entities';
import {
  auth, updatePassword,
  redirectToUserRoot, resetMemberPassword,
  logout
} from 'helpers/auth';
import {
  getMember,
  updateMember
} from 'helpers/api';

export function authenticateUser(user){
  return function authenticateUserThunk(dispatch){
    function redirect(path) {
      dispatch(push(path));
    }
    dispatch(fetchingMember());
    auth(user)
      .then(({userData, uid}) => {
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

export function changePasswordAction(data){
  return {
    type: 'UPDATE_PASSWORD',
    payload: updatePassword(data)
  };
}

export function resetPassword(data){
  return {
    type: 'RESET_PASSWORD',
    payload: resetMemberPassword(data)
  };
}

export function unauth(){
  return function unauthThunk(dispatch){
    logout();
    dispatch({type: 'UNAUTH_MEMBER'});
    dispatch(replace('/'));
  };
}

function fetchingMember(){
  return {
    type: actionTypes.FETCHING_MEMBER
  };
}
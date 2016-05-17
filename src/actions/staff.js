import { push, replace } from 'react-router-redux';
import * as actionTypes from 'constants/action-types';
import { closeStaffModal } from './staff-modal';
import {receiveEntities} from './entities';
import {
  auth, updatePassword,
  redirectToUserRoot, resetMemberPassword,
  logout
} from 'helpers/auth';
import {
  resetPassword
} from './auth';
import { TransformToArrayOfIds } from 'helpers/format-helpers';
import {
  fetchStaffFromRestaurant, getMember,
  updateMember, destroyMember,
  createAndSaveUser, addAdminToRestaurant
} from 'helpers/api';

export function addOrEditStaffMember(staffMember, restaurantId){
  return function addOrEditStaffMemberThunk(dispatch){
    const {email, uid} = staffMember;

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

export function addOrEditAdmin(admin, restaurantId){
  return function addOrEditAdminThunk(dispatch){
    const {email, uid} = admin;

    if(!email){
      throw new Error('No se encontro el email');
    }
    if(!uid){
       createAndSaveUser(admin, restaurantId)
        .then((payload) => {
            dispatch(receiveEntities(payload.entities));
            dispatch({type: actionTypes.ADD_STAFF_MEMBER, payload: [payload.result]});
            addAdminToRestaurant(payload.result, restaurantId);
        })
        .then(() => dispatch(resetPassword({email})))
        .catch(error => {throw new Error(error);} );
    }else{
      updateMember(admin)
        .then(payload => dispatch(receiveEntities(payload.entities)))
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

export function fetchingMemberSuccess(uid){
  return {
    type: actionTypes.FETCH_MEMBER_SUCCESS,
    payload: uid
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

function fetchingMember(){
  return {
    type: actionTypes.FETCHING_MEMBER
  };
}
import Firebase from 'firebase';
import * as actionTypes from '../constants/action-types';
import {ref} from 'constants/firebase';

const Staff = ref.child('restaurants_staff');

export function addStaffMember(){
  return function addStaffMemberThunk(dispatch){
    // TODO: Add code here
  };
}

export function fetchStaff(){
  return function fetchStaffThunk(dispatch){
    Staff.once('value', (snap) => {
      dispatch({type: actionTypes.FETCH_STAFF, payload: snap.val()});
    });
  };
}

export function updateStaffMember(){
  return function updateStaffMemberThunk(dispatch){
    // TODO: Add code here
  };
}

export function removeStaffMember(){
  return function removeStaffMemberThunk(dispatch){
    // TODO: Add code here
  };
}

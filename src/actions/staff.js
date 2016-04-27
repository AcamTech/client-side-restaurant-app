import Firebase from 'firebase';
import * as actionTypes from '../constants/action-types';
import {closeStaffModal} from './staff-modal';
import {ref} from 'constants/firebase';

export function addStaffMember(staffMember, restaurantId){
  return function addStaffMemberThunk(dispatch){

    const memberKey = ref.child('restaurants_staff').push().key();
    const memberPromise = ref.child(`restaurants_staff/${memberKey}/`).set(staffMember);

    memberPromise.then(() => {
      ref.child(`restaurants/${restaurantId}/waiters`).update({
        [memberKey]: true
      },() => {
        dispatch({
          type: actionTypes.ADD_STAFF_MEMBER,
          payload: { [memberKey]: staffMember }
        });
        dispatch(closeStaffModal());
      });
    });
  };
}

export function fetchStaff(restaurantId){
  return function fetchStaffThunk(dispatch, getState){
    const restaurantStaff = ref.child(`restaurants/${restaurantId}/waiters`);
    restaurantStaff.once('value')
      .then((snapshot) => snapshot.val())
      .then(staff => Object.keys(staff))
      .then(arrayStaff => arrayStaff.map(member => {
          return ref.child(`restaurants_staff/${member}`)
            .once('value')
            .then(member => ({[member.key()]: member.val()}))
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

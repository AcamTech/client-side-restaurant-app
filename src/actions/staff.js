import Firebase from 'firebase';
import * as actionTypes from 'constants/action-types';
import {generateRandomPassword} from 'helpers/format-helpers';
import {closeStaffModal} from './staff-modal';
import {ref} from 'constants/firebase';

export function addStaffMember(staffMember, restaurantId){
  return function addStaffMemberThunk(dispatch){
    const {email} = staffMember;
    if(!email){
      throw new Error('No se encontro el email');
    }

    createUserWithEmail(email)
      .then(({uid}) => uid)
      .then(uid => {
        var object = {...staffMember, restaurant: restaurantId};
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
      .catch(error => console.error(error));
  };
}

function createUserWithEmail(email){
  return ref.createUser({
    email,
    password: generateRandomPassword()
  });
}

export function fetchStaff(restaurantId){
  return function fetchStaffThunk(dispatch, getState){
    const restaurantStaff = ref.child(`restaurants/${restaurantId}/waiters`);
    restaurantStaff.once('value')
      .then((snapshot) => snapshot.val() || {})
      .then(staff => Object.keys(staff))
      .then(arrayStaff => arrayStaff.map(member => {
          return ref.child(`restaurants_staff/${member}`)
            .once('value')
            .then(member => ({[member.key()]: member.val()}));
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

export function removeStaffMember(memberId, restaurantId){
  return function removeStaffMemberThunk(dispatch){
    const memberRef = ref.child(`restaurants/${restaurantId}/waiters/${memberId}`);
    memberRef.remove(() => {
      const memberRef = ref.child(`restaurants_staff/${memberId}`);
      memberRef.remove(() => {
        // TODO: Delete user account
        // ref.removeUser({
        //   email    : "bobtony@firebase.com",
        //   password : "correcthorsebatterystaple"
        // }, function(error) {
        //   if (error === null) {
        //     console.log("User removed successfully");
        //   } else {
        //     console.log("Error removing user:", error);
        //   }
        // });
        dispatch({type: actionTypes.REMOVE_STAFF_MEMBER, payload: memberId});
      });
    });
  };
}

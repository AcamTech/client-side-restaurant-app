import Firebase from 'firebase';
import * as actionTypes from 'constants/action-types';
import {generateRandomPassword} from 'helpers/format-helpers';
import {closeStaffModal} from './staff-modal';
import {ref} from 'constants/firebase';

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

export function updateStaffMember(member){
  return {
    type: actionTypes.UPDATE_STAFF_MEMBER,
    payload: member
  };
}

export function removeStaffMember(memberId, restaurantId){
  return function removeStaffMemberThunk(dispatch){
    const memberRef = ref.child(`restaurants/${restaurantId}/waiters/${memberId}`);
    memberRef.remove(() => {
      const memberRef = ref.child(`restaurants_staff/${memberId}`);
      memberRef.remove(() => {
        const blockedMemberRef = ref.child(`blocked_users`)
          .set({
            [memberId] : true
          });
        dispatch({type: actionTypes.REMOVE_STAFF_MEMBER, payload: memberId});
      });
    });
  };
}

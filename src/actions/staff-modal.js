import * as actionTypes from 'constants/action-types';

export function openStaffModal(){
  return {
    type: actionTypes.OPEN_STAFF_MODAL
  };
}

export function closeStaffModal(){
  return {
    type: actionTypes.CLOSE_STAFF_MODAL
  };
}

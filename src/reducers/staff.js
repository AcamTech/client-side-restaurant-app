import * as actionTypes from '../constants/action-types';

var initialState = {
  isFetching: false,
  error: '',
  isAuthed: false,
  authedId: '',
  list: []
};

export default function staff(state=initialState, action){
  var {type, payload} = action;
  switch(type){
    case actionTypes.AUTH_MEMBER:
      return {...state, isAuthed: true, authedId: payload};
    case actionTypes.UNAUTH_MEMBER:
      return initialState;
    case actionTypes.FETCH_MEMBER_SUCCESS:
      return {...state, isFetching: false, list: [...state.list, payload]};
    case actionTypes.ADD_STAFF_MEMBER:
      return {...state, list: [...state.list, ...payload]};
    case actionTypes.FETCH_STAFF:
      return {...state, list: payload};
    case actionTypes.UPDATE_STAFF_MEMBER:
      var updatedMember = {...state.list, ...payload};
      return {...state, list: updatedMember};
    case actionTypes.REMOVE_STAFF_MEMBER:
      var index = state.list.indexOf(payload);
      return {...state, list: [
        ...state.list.slice(0, index),
        ...state.list.slice(index + 1)
      ]};
    default:
      return state;
  }
}

import * as actiontypes from '../constants/action-types';

var initialState = {
  isFetching: false,
  error: '',
  isAuthed: false,
  authedId: '',
  list: {}
};

export default function staff(state=initialState, action){
  var {type, payload} = action;
  switch(type){
    case actiontypes.AUTH_MEMBER:
      return {...state, isAuthed: true, authedId: payload};
    case 'UNAUTH_MEMBER':
      return initialState;
    case actiontypes.FETCH_MEMBER_SUCCESS:
      return {...state, isFetching: false, list: {...state.list, [payload.uid]: payload.userData}};
    case actiontypes.ADD_STAFF_MEMBER:
      return {...state, list: Object.assign({}, state.list, payload)};
    case actiontypes.FETCH_STAFF:
      return {...state, list: {...state.list, ...payload}};
    case actiontypes.UPDATE_STAFF_MEMBER:
      var updatedMember = {...state.list, ...payload};
      return {...state, list: updatedMember};
    case actiontypes.REMOVE_STAFF_MEMBER:
      var list = Object.assign({}, state.list);
      delete list[payload];
      return {...state, list: list};
    default:
      return state;
  }
}

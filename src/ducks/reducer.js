import * as actiontypes from './actiontypes';

const setUserID = (state, userID) => ({...state, userID});

export default function(state = {}, action) {
  switch (action.type) {
    case actiontypes.SET_USERID:
      return setUserID(state, action.userID);
    default:
      return state;
  }
}

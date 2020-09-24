import * as actiontypes from './actiontypes';

const setUserID = (state, userID) => ({...state, userID});
const setUserLang = (state, userLang) => ({...state, userLang});

export default function(state = {}, action) {
  switch (action.type) {
    case actiontypes.SET_USERID:
      return setUserID(state, action.userID);
    case actiontypes.SET_USERLANG:
      return setUserLang(state, action.userLang);
    default:
      return state;
  }
}

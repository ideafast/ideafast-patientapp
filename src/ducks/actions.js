import * as actiontypes from './actiontypes';
import {API} from '../api';

export const mapDispatchToProps = dispatch => ({
  verifyUserID: userID => dispatch(verifyUserID(userID)),
  setUserLang: userLang => dispatch(setUserLang(userLang)),
});

const verifyUserID = userID => async dispatch => {
  const {data, meta} = await API.verifyUser(userID);
  if (meta.success) {
    await dispatch(setUserID(data.participant.id));
  } else {
    // TODO: currently only works for success case
  }
};

const setUserID = userID => ({
  type: actiontypes.SET_USERID,
  userID,
});

const setUserLang = userLang => ({
  type: actiontypes.SET_USERLANG,
  userLang,
});

import Config from 'react-native-config';
const {API_URL} = Config;

import * as actiontypes from './actiontypes';

export const mapDispatchToProps = dispatch => ({
  verifyUserID: userID => dispatch(verifyUserID(userID)),
  setUserLang: userLang => dispatch(setUserLang(userLang)),
});

const verifyUserID = userID => async dispatch => {
  const response = await fetch(`${API_URL}/verify`, {
    method: 'post',
    body: JSON.stringify({userID}),
  });
  const verificationJSON = await response.json();
  await dispatch(setUserID(verificationJSON.participant.id));
};

const setUserID = userID => ({
  type: actiontypes.SET_USERID,
  userID,
});

const setUserLang = userLang => ({
  type: actiontypes.SET_USERLANG,
  userLang,
});

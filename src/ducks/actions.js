import Config from 'react-native-config';

import * as actiontypes from './actiontypes';

export const mapDispatchToProps = dispatch => ({
  verifyUserID: userID => dispatch(verifyUserID(userID)),
});

const verifyUserID = userID => async dispatch => {
  const response = await fetch(`${Config.MOCK_API_ADDRESS}/api/verify`, {
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

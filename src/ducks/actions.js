import * as actiontypes from './actiontypes';

export const mapDispatchToProps = dispatch => ({
  verifyUserID: userID => dispatch(verifyUserID(userID)),
});

const verifyUserID = userID => async dispatch => {
  await new Promise(r => setTimeout(r, 2000));
  await dispatch(setUserID(userID));
};

const setUserID = userID => ({
  type: actiontypes.SET_USERID,
  userID,
});

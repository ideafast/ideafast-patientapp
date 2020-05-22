import * as actiontypes from './actiontypes';

export const mapDispatchToProps = dispatch => ({
  verifyUserID: userID => dispatch(verifyUserID(userID)),
});

const verifyUserID = userID => async dispatch => {
  // const url = 'https://reactnative.dev/movies.json';
  // const response = await fetch(url);
  // const responseJSON = await response.json();
  // const films = await responseJSON.movies;
  await dispatch(setUserID(userID));
};

const setUserID = userID => ({
  type: actiontypes.SET_USERID,
  userID,
});

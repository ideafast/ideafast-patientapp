import * as actiontypes from './actiontypes';
import {API} from '../api';

export const mapDispatchToProps = dispatch => ({
  verifyUserID: userID => dispatch(verifyUserID(userID)),
  setUserLang: userLang => dispatch(setUserLang(userLang)),
  getDevices: () => dispatch(getDevices()),
});

const verifyUserID = userID => async dispatch => {
  const {data, meta} = await API.verifyUser(userID);
  if (meta.success) {
    await dispatch(setUserID(data.participant.id));
  } else {
    console.log(meta.errors);
  }
};

const getDevices = () => async dispatch => {
  const {data, meta} = await API.getDevices();

  if (meta.success) {
    await dispatch(setDevices(data));
  } else {
    console.log(meta.errors);
  }
};

const setDevices = devices => ({
  type: actiontypes.SET_DEVICES,
  devices,
});

const setUserID = userID => ({
  type: actiontypes.SET_USERID,
  userID,
});

const setUserLang = userLang => ({
  type: actiontypes.SET_USERLANG,
  userLang,
});

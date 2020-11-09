import * as actiontypes from './actiontypes';

const setUserID = (state, userID) => ({...state, userID});
const setUserLang = (state, userLang) => ({...state, userLang});
const setDevices = (state, devices) => {
  // Update devices to include the remote server state
  devices = state.devices.map(deviceLocal => {
    // Find the remote object for this device based on unique key (ID)
    const deviceRemote = devices.find(d => d.id === deviceLocal.id);
    // Merge objects: as we will ship icons, deviceLocal comes second
    // as its properties are used if both objects have the same key, e.g. image.
    return {...deviceRemote, ...deviceLocal};
  });

  return {...state, devices};
};

export default function(state = {}, action) {
  switch (action.type) {
    case actiontypes.SET_USERID:
      return setUserID(state, action.userID);
    case actiontypes.SET_USERLANG:
      return setUserLang(state, action.userLang);
    case actiontypes.SET_DEVICES:
      return setDevices(state, action.devices);
    default:
      return state;
  }
}

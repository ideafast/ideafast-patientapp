import * as actiontypes from './actiontypes';

export function setNumber(number) {
  return {
    type: actiontypes.SET_NUMBER,
    number,
  };
}

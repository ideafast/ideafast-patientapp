import * as actiontypes from './actiontypes';

const setNumber = (state, number) => {
  return Object.assign({}, {number});
};

export default function(state = {}, action) {
  switch (action.type) {
    case actiontypes.SET_NUMBER:
      return setNumber(state, action.number);
    default:
      return state;
  }
}

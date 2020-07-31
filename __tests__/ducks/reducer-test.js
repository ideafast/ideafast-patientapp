/**
 * @format
 */

import * as actiontypes from '../../src/ducks/actiontypes';
import initialState from '../../src/ducks/initialState';
import reducer from '../../src/ducks/reducer';

it('should set the userID', () => {
  const userID = 1;
  const action = {
    type: actiontypes.SET_USERID,
    userID,
  };
  const newState = reducer(action, initialState);
  expect(newState.userID).toBe(userID);
});

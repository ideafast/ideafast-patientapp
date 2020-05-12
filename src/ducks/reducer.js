import * as actiontypes from './actiontypes';

const setFilms = (state, films) => ({...state, films});
const setNumber = (state, number) => ({...state, number});

export default function(state = {}, action) {
  switch (action.type) {
    case actiontypes.FETCH_FILMS:
      return setFilms(state, action.films);
    case actiontypes.SET_NUMBER:
      return setNumber(state, action.number);
    default:
      return state;
  }
}

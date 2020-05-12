import * as actiontypes from './actiontypes';

export const mapDispatchToProps = dispatch => ({
  fetchFilms: () => dispatch(fetchFilms()),
  setNumber: number => dispatch(setNumber(number)),
});

const fetchFilms = () => async dispatch => {
  const url = 'https://reactnative.dev/movies.json';
  const response = await fetch(url);
  const responseJSON = await response.json();
  const films = await responseJSON.movies;
  await dispatch(fetchFilmsSuccess(films));
};

const fetchFilmsSuccess = films => ({
  type: actiontypes.FETCH_FILMS,
  films,
});

const setNumber = number => ({
  type: actiontypes.SET_NUMBER,
  number,
});

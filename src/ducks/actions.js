import * as actiontypes from './actiontypes';

export const mapDispatchToProps = dispatch => ({
  fetchFilms: () => dispatch(fetchFilms()),
  setNumber: number => dispatch(setNumber(number)),
});

const fetchFilms = () => dispatch => {
  const url = 'https://reactnative.dev/movies.json';
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .then(response => response.movies)
    .then(films => dispatch(fetchFilmsSuccess(films)));
};

const fetchFilmsSuccess = films => ({
  type: actiontypes.FETCH_FILMS,
  films,
});

const setNumber = number => ({
  type: actiontypes.SET_NUMBER,
  number,
});

import {fetChMovies, changeRating} from '../services/movie.js';
import {push} from 'react-router-redux'
import {c} from '../constants';

var allMovies;
var searchName;

function loadMovies(dispatch) {
  return (dispatch) => {
    fetChMovies().then((movies) => {
      allMovies = movies;
      dispatch(loadTheMovies(movies));
    });
  };
}

function searchMovieByName(name) {
  searchName = name;
  return (dispatch) => {

    var movies = allMovies.filter(movie => movie.title.toUpperCase().indexOf(name.toUpperCase()) !== -1);
    dispatch(loadTheMovies(movies));
  };
}

function loadTheMovies(movies) {
  return ({type: c.LOAD_MOVIES, payload: movies});
}

export function preloadMovies() {
  return (dispatch) => {
    loadMovies()(dispatch);
  };
}

export function searchMovie(name) {
  return (dispatch) => {
    searchMovieByName(name)(dispatch);
  };
}

export function changeMovieRating(movie, rating) {

  var index = allMovies.indexOf(movie);
  allMovies[index].rating = rating;

  return (dispatch) => {
    changeRating(movie, rating).then((responsd) => {
      if (searchName) {
        dispatch(searchMovie(searchName));
      } else {
        dispatch(loadMovies());
      }
    }).catch((error) => {
      console.log('changeMovieRating failed');
    });
  }
}

export function logout() {
  return dispatch => {
    localStorage.clear();
    dispatch(push('/login'));
  }
}

export const movieActions = {
  preloadMovies,
  searchMovie,
  changeMovieRating,
  logout
}
export default movieActions;
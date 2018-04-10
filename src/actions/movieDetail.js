import {fetChMovieById} from '../services/movie.js';
import {c} from '../constants';


function loadMovieById(id) {
  return (dispatch) => {
      fetChMovieById(id).then((movie) => dispatch(loadTheMovie(movie)));
  };
}

export function loadTheMovie(movie) {
  return ({type: c.LOAD_MOVIE, payload: movie});
}


export function preloadMovieById(id) {
  return (dispatch) => {
    loadMovieById(id)(dispatch);
  };
}
export const movieDetailActions = {
 
  preloadMovieById

}
export default movieDetailActions;

import {combineReducers} from 'redux'

import MoviesReducer from './movies.js'
import LoginReducer from './login.js'   
import MovieDetailReducer from './movieDetail.js'
const rootReducer = combineReducers({ credential: LoginReducer, movies: MoviesReducer, movieDetail: MovieDetailReducer})

export default rootReducer

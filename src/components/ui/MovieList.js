import React from 'react'
import Movie from './Movie.js'
import RatingBar from './RatingBar.js'
import LogoutButton from './LogoutButton'

const MovieList = ({
  movies,
  searchMovie = f => f,
  ratingChanged = f => f,
  logout = f => f

}) => {

  let _movieName;

  const handleTextChange = (e) => {
    searchMovie(_movieName.value)
  }

  return (

    <div className="movie-container">
      <div className="row">
        <div className="col-sm-9">
          <h3>Now Playing</h3>
        </div>

        <div className="col-sm-2">
          <input
            autoFocus
            name="_movieName"
            type="text"
            onChange={(e) => handleTextChange(e)}
            placeholder="Search..."
            ref={input => _movieName = input}/>
        </div>

        <div className="col-sm-1">
          <LogoutButton logout ={() => logout()}/>
        </div>

      </div>
      <br/>
      <div>
        <ul>
          {movies.map(movie => <li key={movie.id}>
            <Movie title={movie.title} poster={"/" + movie.poster_path} id={movie.id}/>
            <RatingBar
              stars={movie.rating}
              ratingChanged={rating => ratingChanged(movie, rating)}/>
          </li>)}
        </ul>
      </div>
    </div>
  )

}

export default MovieList;
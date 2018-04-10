import React from 'react'

const movieDetailUI = (movieDetail = {}) => <div>
  <div className="movie-detail">
    <h3>
    {movieDetail.movie.title}
    </h3>
    <h4>
    {movieDetail.movie.overview}
    </h4>

    <img
      src={`${process.env.PUBLIC_URL}/images/backdrops${"/" + movieDetail.movie.backdrop_path}`}
      alt={`Backdrop for ${movieDetail.movie.backdrop_path}`}/>
  </div>
</div>

 
export default movieDetailUI;
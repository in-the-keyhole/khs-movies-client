import React from 'react'

const movie = ({
    id = 0,
    title = '',
    poster = ''
}) => <div>
    <div className="movie-detail">
        <a href={`/movies/${id}`}  target="_blank" >
            <img
                src={`${process.env.PUBLIC_URL}/images/posters${poster}`}
                alt={`Poster for ${title}`}/>
        </a>
    </div>
</div>

export default movie;

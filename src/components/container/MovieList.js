import {connect} from 'react-redux'
import {Component} from 'react'
import {bindActionCreators} from 'redux'
import React from 'react'
import {withRouter} from 'react-router-dom'
import MovieList from '../ui/MovieList.js'

import MovieActions from '../../actions/movie.js'

class MoviesContainer  extends Component {
    componentWillMount() {
        this
            .props
            .preloadMovies();
    }

    render() {
        return <MovieList
            movies={this.props.movies}
            searchMovie={this.props.searchMovie}
            ratingChanged={this.props.changeMovieRating}
            logout ={this.props.logout}/>
    }
}

const mapStateToProps = (state, props) => ({movies: state.movies, credential: state.credential})

const mapDispatchToProps = dispatch => bindActionCreators(MovieActions,dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoviesContainer))

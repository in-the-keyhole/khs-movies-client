import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Component}  from 'react'
import React from 'react'
import {withRouter} from 'react-router-dom'
import MovieDetail from '../ui/MovieDetail.js'
 
import MovieDetailActions from '../../actions/movieDetail.js'

class MovieDetailContainer extends Component {

    componentWillMount() {
        this
            .props
            .preloadMovieById(this.props.match.params.id);
    }
 
    render() {
        return <MovieDetail movie={this.props.movieDetail}/>
    }
}

const mapStateToProps = (state, props) => ({movieDetail: state.movieDetail})

const mapDispatchToProps = dispatch => bindActionCreators(MovieDetailActions, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieDetailContainer))

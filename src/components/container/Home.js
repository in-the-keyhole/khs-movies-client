import React from 'react'
import {connect} from 'react-redux'
import {Component} from 'react'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import Home from '../ui/Home.js'

class HomeContainer extends Component {
    componentWillMount() {}

    render() {
        return <Home/>
    }
}

const mapStateToProps = (state, props) => ({})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer))

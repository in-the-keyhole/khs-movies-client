import {connect} from 'react-redux'
import {Component} from 'react'
import {bindActionCreators} from 'redux'
import React from 'react'
import {withRouter} from 'react-router-dom'
import  Header from '../ui/Header'
 
class HeaderContainer extends Component {
    componentWillMount() {}

    render() {
        return <Header/>
    }
}

const mapStateToProps = (state, props) => ({})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer))

import {connect} from 'react-redux'
import {Component} from 'react'
import React from 'react'
import {withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import Loginactions from '../../actions/login.js'
import Login from '../ui/Login.js'


class LoginContainer extends Component {
    render() {
        return <Login   login ={this.props.login} />
    }
}
const mapStateToProps = (state, props) => ({})

const mapDispatchToProps = dispatch => bindActionCreators(Loginactions, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer))

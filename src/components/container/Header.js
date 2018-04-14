import {connect} from 'react-redux'
import {Component} from 'react'
import {bindActionCreators} from 'redux'
import React from 'react'
import {withRouter} from 'react-router-dom'
import  Header from '../ui/Header'
import RegisterActions from '../../actions/register.js'
import LoginActions from '../../actions/login.js'
 
class HeaderContainer extends Component {
    componentWillMount() {}

    render() {
        return <Header message= {this.props.message}/>
    }
}
//RegisterActions,LoginActions
const mapStateToProps = (state, props) => ({message:state.message})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer))

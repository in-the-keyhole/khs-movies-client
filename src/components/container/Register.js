import {connect} from 'react-redux'
import {Component} from 'react'
import {bindActionCreators} from 'redux'
import React from 'react'
import {withRouter} from 'react-router-dom'
import Register from '../ui/Register.js'

 import RegisterActions from '../../actions/register.js'

class RegisterContainer extends Component {
    componentWillMount() {

        // this
        //     .props
        //     .register();
    }

    render() {
        return <Register register ={this.props.register}/>
    }
}

const mapStateToProps = (state, props) => ({})

const mapDispatchToProps = dispatch => bindActionCreators(RegisterActions, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterContainer))

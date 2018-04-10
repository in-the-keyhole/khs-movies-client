import { login } from '../services/login.js';
import { c } from '../constants';
import { push } from 'react-router-redux'
// import { browserHistory } from 'react-router'


function userLogin(email, password) {
    return dispatch => {

        login(email, password).then(user => {
            localStorage.setItem("token", user.token );
            localStorage.setItem("user", user.email );
            // dispatch(success(user));
            //browserHistory.push('/movies')
            dispatch(push('/movies'));
        }, error => {
            dispatch(failure(error));
        }).catch(function (error) {
            dispatch(failure(error));
        });
    };

    function success(payload) {
        return { type: c.USER_LOGIN_SUCCESS, payload }
    }
    function failure(payload) {
        return { type: c.USER_LOGIN_FAILURE, payload }
    }
}

export const loginActions = {
    login: userLogin
}

export default loginActions;

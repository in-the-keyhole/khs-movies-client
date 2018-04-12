import {login} from '../services/login.js';
import {c} from '../constants';
import {push} from 'react-router-redux'

function userLogin(email, password) {

    var message = {}

    return dispatch => {

        login(email, password).then(response => {
            if (response.error != undefined && response.error != '') {
                message.error = response.error;
                dispatch(failure(message));

            } else {
                localStorage.setItem("token", response.token);
                localStorage.setItem("user", response.email);
                message.error = "";
                dispatch(success(message));
                dispatch(push('/movies'));
            }

        }, error => {
            message.error = error;
            dispatch(failure(message));
            dispatch(push('/login'));
        })
            .catch(function (error) {
                message.error = error;
                dispatch(failure(message));
                dispatch(push('/login'));
            });
    };

    function failure(payload) {
        return {type: c.USER_LOGIN_FAILURE, payload}
    }

    function success(payload) {
        return {type: c.USER_LOGIN_SUCCESS, payload}
    }
}

export const loginActions = {
    login: userLogin
}

export default loginActions;

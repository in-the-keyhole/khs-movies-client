import {login} from '../services/login.js';
import {c} from '../constants';
import {push} from 'react-router-redux'

function userLogin(email, password) {
    return dispatch => {
        login(email, password).then(response => {
            if (response.error != undefined && response.error != '') {
                dispatch(failure(response.error));

            } else {
                localStorage.setItem("token", response.token);
                localStorage.setItem("user", response.email);
                dispatch(success(""));
                dispatch(push('/movies'));
            }

        }, error => {
            dispatch(failure(error));
            dispatch(push('/login'));
        })
            .catch(function (error) {
                dispatch(failure(error));
                dispatch(push('/login'));
            });
    };

    function failure(payload) {
        return {type: c.FAILURE, payload}
    }

    function success(payload) {
        return {type: c.SUCCESS, payload}
    }
}

export const loginActions = {
    login: userLogin
}

export default loginActions;

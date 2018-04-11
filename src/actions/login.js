import { login } from '../services/login.js';
import { c } from '../constants';
import { push } from 'react-router-redux'


function userLogin(email, password) {
    return dispatch => {

        login(email, password).then(user => {
            localStorage.setItem("token", user.token );
            localStorage.setItem("user", user.email );
            dispatch(push('/movies'));
        }, error => {
            dispatch(failure(error));
        }).catch(function (error) {
            dispatch(failure(error));
        });
    };

 
    function failure(payload) {
        return { type: c.USER_LOGIN_FAILURE, payload }
    }
}

export const loginActions = {
    login: userLogin
}

export default loginActions;

import {push} from 'react-router-redux'
import {register} from '../services/register.js';
import {c} from '../constants';

export function registerUser(email, password, confirmPassword) {

  var message;
  return dispatch => {
    register(email, password, confirmPassword).then(response => {

      if ( response.error== "") {
        message = {
          type: c.USER_REGISTER_FAILURE,
          error: response.error 
        }

        dispatch(registrationfailure(message));
        dispatch(push('/login'));

      } else {
        message = {
          type: c.USER_REGISTER_SUCCESS,
          error: ""
        }
        dispatch(registrationSuccess(message));
      }

    }, error => {
      message = {
        type: c.USER_REGISTER_FAILURE,
        error: error
      }
      dispatch(registrationfailure(message));
    })
      .catch(function (error) {
        message = {
          type: c.USER_REGISTER_FAILURE,
          error: error
        }
        dispatch(registrationfailure(message));
      });;
  }
}

function registrationfailure(message) {
  return ({type: c.USER_REGISTER_FAILURE, payload: message});
}

function registrationSuccess(message) {
  return ({type: c.USER_REGISTER_SUCCESS, payload: message});
}

export const registeActions = {
  register: registerUser
}
export default registeActions;
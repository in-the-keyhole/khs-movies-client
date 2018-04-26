import {push} from 'react-router-redux'
import {register} from '../services/register.js';
import {c} from '../constants';

export function registerUser(email, password, confirmPassword) {

  return dispatch => {
    register(email, password, confirmPassword).then(response => {

      if (response.error != undefined && response.error != '') {
        dispatch(registrationfailure(response.error));
      } else {
        dispatch(registrationSuccess(""));
        dispatch(push('/login'));
      }

    }, error => {
      dispatch(registrationfailure(error));
    })
      .catch(function (error) {
        dispatch(registrationfailure(error));
      });;
  }
}

function registrationfailure(payload) {
  return ({type: c.FAILURE, payload});
}

function registrationSuccess(payload) {
  return ({type: c.SUCCESS, payload});
}

export const registeActions = {
  register: registerUser
}
export default registeActions;
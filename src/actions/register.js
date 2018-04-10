import {push} from 'react-router-redux'
import {c} from '../constants';
import {register} from '../services/register.js';

export function registerUser(email, password, confirmPassword) {
  return dispatch => {
    register(email, password, confirmPassword).then(user => {
      dispatch(push('/login'));
    }, error => {
      //dispatch(failure(error));
    })
      .catch(function (error) {
       // dispatch(failure(error));
      });;
  }
}

export const registeActions = {
  register: registerUser
}
export default registeActions;
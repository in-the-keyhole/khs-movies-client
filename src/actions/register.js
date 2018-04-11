import {push} from 'react-router-redux'
import {register} from '../services/register.js';

export function registerUser(email, password, confirmPassword) {
  return dispatch => {
    register(email, password, confirmPassword).then(user => {
      dispatch(push('/login'));
    }, error => {
    })
      .catch(function (error) {
      });;
  }
}

export const registeActions = {
  register: registerUser
}
export default registeActions;
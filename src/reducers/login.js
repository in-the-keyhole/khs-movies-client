import {c} from '../constants'

const login = (state = {
}, action) => {
    switch (action.type) {
        case c.USER_LOGIN_SUCCESS:
            return action.payload;
        case c.USER_LOGIN_FAILURE:
            return state;
        default:
            return state
    }
}

export default login

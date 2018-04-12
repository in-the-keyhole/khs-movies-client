import {c} from '../constants'

const Message = (state = {}, action) => {
    switch (action.type) {
        case c.USER_LOGIN_SUCCESS:
            return action.payload;
        case c.USER_LOGIN_FAILURE:
            return action.payload;
        case c.USER_REGISTER_SUCCESS:
            return action.payload;
        case c.USER_REGISTER_FAILURE:
            return action.payload;
        default:
            return state
    }
}

export default Message

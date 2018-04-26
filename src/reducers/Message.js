import {c} from '../constants'

const Message = (state = {}, action) => {
    switch (action.type) {
        case c.SUCCESS:
            return action.payload;
        case c.FAILURE:
            return action.payload;
        default:
            return state
    }
}

export default Message

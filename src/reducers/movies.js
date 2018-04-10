import {c} from '../constants'

const movies = (state = {
}, action) => {
    switch (action.type) {
        case c.LOAD_MOVIES:
            return action.payload;
        case c.SEARCH_MOVIES:
            return action.payload;
        default:
            return state
    }
}

export default movies

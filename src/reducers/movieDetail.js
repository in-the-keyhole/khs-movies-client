import {c} from '../constants'

const movieDetail = (state = {
}, action) => {
    switch (action.type) {
        case c.LOAD_MOVIE:
            return action.payload;
        default:
            return state
    }
}

export default movieDetail

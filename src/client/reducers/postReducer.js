import { FETCH_COLLECTIONS, FETCH_POST, NEW_POSTS } from '../actions/types'

const initState = {
    items: [],
    item: {}
}

export default function (state = initState, action) { //reducer needs state and action



    switch (action.type) {
        case FETCH_POST:
            delete state.item
            state.items = action.payload
            return {
                ...state
            }
            break
        case NEW_POSTS:
            return {
                ...state,
                item: action.payload
            }
            break

        default:
            return state;
    }
}
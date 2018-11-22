import { FETCH_POST, NEW_POSTS } from '../actions/types'

const initState = {
    items: [],
    item: {}
}

export default function (state = initState, action) { //reducer needs state and action

    switch (action.type) {
        case FETCH_POST:
            console.log('FETCH_POST reducer is called')
            delete state.item
            state.items = action.payload
            return {
                ...state
            }
            break
        case NEW_POSTS:
            console.log('FETCH_POST reducer is called')
            return {
                ...state,
                item: action.payload
            }
            break

        default:
            console.log(action.type)
            return state;
    }
}
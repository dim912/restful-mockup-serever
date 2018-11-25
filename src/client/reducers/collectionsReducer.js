import { FETCH_COLLECTIONS, FETCH_POST, NEW_POSTS } from '../actions/types'

const initState = {
    items: [],
    visible: false
}

export default function (state = initState, action) { //reducer needs state and action

    switch (action.type) {
        case FETCH_COLLECTIONS:
            // state.items = action.payload.data . never mutate the state. create a new state and return
            return {
                ...state, items: action.payload.data
            }

        case 'TEST_TYPE':
            return {
                ...state, items: [...state.items, { id: (new Date()).getMilliseconds(), name: action.payload }]
            }

        default:
            return state
    }
}

import { FETCH_POST, NEW_POST } from '../actions/types'

const initState = {
    items: [],
    Item: {}
}

export default function (state = initState, action) {


    switch (action.type) {
        case FETCH_POST:
            console.log('FETCH_POST reducer is called')
            return {
                ...state,
                items: action.payload
            }
            break
        default:
            console.log(action.type)
            return state;
    }
}
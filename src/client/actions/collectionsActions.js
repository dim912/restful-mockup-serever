import axios from 'axios'
import { FETCH_COLLECTIONS } from '../actions/types'

export default function fetchCollections(dispatch) {

    return () =>
        axios.get('/api/collections')
            .then(data => {
                return dispatch(
                    {
                        type: FETCH_COLLECTIONS,
                        payload: data
                    }
                )
            }).catch(e => {
                console.log("!!!!!!!!!!!!!!!!!!!!!!!!11" + e)
            })

}
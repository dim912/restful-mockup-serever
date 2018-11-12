import { FETCH_POST } from './types'

export default function fetchPOst() {
    console.log('called thisssssssssssssssssssssssssssst')
    return function (dispatch) {
        console.log('called thissssssssssssssssssssssssssss')
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                return dispatch(
                    {
                        type: FETCH_POST,
                        payload: data
                    }
                )
            })

    }
}

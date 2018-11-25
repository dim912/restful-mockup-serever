import { FETCH_POST, NEW_POSTS } from './types'

export default function fetchPOst(dispatch) {


    return () => fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            return dispatch( //when we are done with the action -> we call the dispatcher function 
                //which is pasesd with type, and payload data
                //then dispatcher calls all the reducers with the type and payload
                //corresponding reducers updates their status accordingly
                {
                    type: FETCH_POST,
                    payload: data
                }
            )
        })
}

export function createPost(postData) {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)

        })
            .then(res => res.json())
            .then(post => {
                return dispatch(
                    {
                        type: NEW_POSTS,
                        payload: post
                    }
                )
            })
    }
}
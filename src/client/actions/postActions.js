import { FETCH_POST, NEW_POSTS } from './types'

export default function fetchPOst() {

    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                return dispatch(
                    {
                        type: FETCH_POST,
                        payload: data
                    }
                )
            })
    }
}


export function createPost(postData) {
    console.log('Create Post is called 1')
    return function (dispatch) {
        console.log('Create Post is called 2')
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)

        })
            .then(res => res.json())
            .then(post => {
                console.log(post)
                return dispatch(
                    {
                        type: NEW_POSTS,
                        payload: post
                    }
                )
            })
    }
}



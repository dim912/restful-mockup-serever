import React, { Component } from 'react'

import { Table } from 'antd';
import 'antd/lib/table/style/css';
import { connect } from 'react-redux'
import fetchPost from '../actions/postActions'
import Proptypes from 'prop-types'


import EndPointRecord from './EndPointRecord';

class CollectionInfo extends Component {

    componentWillMount() {
        this.props.fetchPost()

    }

    render() {

        const postItems = this.props.posts.map(it => (
            <div key={it.id}>
                <h3> {it.title}</h3>
            </div>
        ))


        return (
            <div>
                <div> {postItems}</div>
                <p>

                    <EndPointRecord></EndPointRecord>
                    <EndPointRecord></EndPointRecord>
                    <EndPointRecord></EndPointRecord>
                    <EndPointRecord></EndPointRecord>
                </p>
            </div>
        )
    }
}



function mapStateToProps(state) {
    console.log(state)
    return { posts: state.posts.items }
}

CollectionInfo.Proptypes = {
    fetchPost: Proptypes.func.isRequired,
    posts: Proptypes.array.isRequired
}


export default connect(mapStateToProps, { fetchPost })(CollectionInfo)
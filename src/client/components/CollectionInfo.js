import React, { Component } from 'react'
import { Table } from 'antd';
import 'antd/lib/table/style/css';
import { connect } from 'react-redux'
import fetchPost from '../actions/postActions'
import Proptypes from 'prop-types'

import EndPointRecord from './EndPointRecord';

class CollectionInfo extends Component {

    componentWillMount() {  // Lifecycle mehtod which is called when the component is rendered
        //this.props.fetchPost()
    }



    render() {

        const postItems = this.props.posts.map(it => (
            <div key={it.id}>
                <h3> {it.title + this.props.visible}</h3>
            </div>
        ))

        return (
            <div>
                {this.props.test}
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

/** describe how current state should be mapped to props of the component    */
const mapStateToProps = (state) => {
    return {
        posts: state.posts.items,
        test: state.test.testGlobalState,
        visible: !state.collections.visible
    }
}

//receives the dispatch method  and return callback props, that is injected into presentational components
const mapDispatchtoProps = (dispatch) => {


    return {
        fetchPost: fetchPost(dispatch),
    }
}

//Runtime type checking 
CollectionInfo.Proptypes = {
    fetchPost: Proptypes.func.isRequired,
    posts: Proptypes.array.isRequired
}

/**
 * There is no direct way to interact with data in redux store (Only has access to top and bottm components of redux flow) 
 * Only way is through 
 *   a. through dispather -> if to change data
 *   b. obtaining current state 
 * 
 * 
 */


/** connect function => conencts the component with the store
 *  mapStateToProps => does connect status of the store with props of the componets
 *  secondArgumnet => conenct with the dispatch
 * 
 * does store.subscribe
 */
export default connect(mapStateToProps, mapDispatchtoProps)(CollectionInfo) //
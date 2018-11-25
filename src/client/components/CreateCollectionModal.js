import React, { Component } from 'react'


import { Modal, Input } from 'antd';
import { connect } from 'react-redux'

import 'antd/lib/input/style/css';
import 'antd/lib/modal/style/css';
import { UI_TOGGLE_CREATE_COLLECTION_MODAL } from '../actions/types'


class CreateCollectionModal extends Component {


    //called before the component is mounted
    constructor(props) {
        super(props)
        this.state = { collectionName: '' }
    }

    //called when props are changed. (Not called when mounting)
    componentWillReceiveProps(props) {
        this.setState({ collectionName: '' })
    }

    handleOK = (e) => {
        this.props.addPostCollection(this.state.collectionName)
        this.props.toggle(false)
    }

    handleCancel = (e) => {
        this.props.toggle(false)
    }

    onChange = (e) => {
        this.setState({ collectionName: e.target.value })
    }

    render() {
        return <div>
            <Modal
                title="Collection Name"
                visible={this.props.visible}
                onOk={this.handleOK}
                onCancel={this.handleCancel}
            >
                <Input onChange={this.onChange} value={this.state.collectionName}></Input>
            </Modal>
        </div>
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPostCollection: (collectionName) => {
            dispatch({
                type: 'TEST_TYPE',
                payload: collectionName
            })
        },
        toggle: (isVisible) => {
            dispatch({
                type: UI_TOGGLE_CREATE_COLLECTION_MODAL,
                payload: isVisible
            })
        }
    }
}

//This is called when the componet is loaded and when the status is updated
// At mounting
// connect calls the mapStateToProps => then calls constructor
// when state changes => mapStateToProps => then componentWillReceiveProps
const mapStateToProps = (state) => {
    return {
        visible: state.uiState.createCollectionModal.visible
    }
}

//Connect reruns a higer order component
export default connect(mapStateToProps, mapDispatchToProps)(CreateCollectionModal)
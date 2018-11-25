import React, { Component } from 'react'

import { Modal } from 'antd';

import { Menu, Icon, Button, Input } from 'antd';
import 'antd/lib/button/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/modal/style/css';

import '../sass/style.scss';
import { connect } from 'react-redux'
import colActs from '../actions/collectionsActions'
import Proptypes from 'prop-types'
import CreateCollectionModal from './CreateCollectionModal'
import { UI_TOGGLE_CREATE_COLLECTION_MODAL } from '../actions/types'

class CollectionList extends Component {

    showModal = () => {
        this.props.updateShowModel(true)
    }

    componentWillMount() {
        this.props.collectionAction()
    }


    render() {
        return <div className="colletionList">
            <div
                style={{
                    'padding-top': '4%',
                    'padding-left': '4%',
                    'padding-right': '5%'
                }}>
                <div
                    style={{
                        'display': 'flex',
                        'align-content': 'center',
                        'justify-content': 'space-between',
                    }}>
                    <div>
                        <b>Collections</b>
                    </div>
                    <div>
                        <Button onClick={this.showModal} type="primary" icon="book" style={{
                        }}> New</Button>

                        <CreateCollectionModal />


                    </div>
                </div>
                <div
                    style={{
                        'padding-top': '3%',
                        'padding-bottom': '3%'
                    }}>
                    <Input placeholder="Search Collection " />
                </div>
            </div>

            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}>
                {
                    this.props.collects.map(c => (
                        <Menu.Item key={c.id}>
                            <Icon type="book" />
                            {c.name}
                        </Menu.Item>
                    ))
                }
            </Menu>
        </div>

    }
}

const mapStateToProps = state => {
    return {
        collects: state.collections.items
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        collectionAction: colActs(dispatch),
        updateShowModel: (val) => {
            dispatch({
                type: UI_TOGGLE_CREATE_COLLECTION_MODAL,
                payload: val
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(CollectionList)

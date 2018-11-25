import React, { Component } from 'react'
import { Col, Row, Affix } from 'antd';
import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/affix/style/css';
import CollectionList from './CollectionList'
import JSONPanel from './JSONPanel';
import RestfulInfoPanel from './RestfulInfoPanel';
import '../sass/style.scss'
import { Input } from 'antd';
import 'antd/lib/list/style/css';
import 'antd/lib/avatar/style/css';
import 'antd/lib/button/style/css';
import CollectionInfo from '../components/CollectionInfo'

const { TextArea } = Input;

class Content extends Component {

    render() {
        return <div>

            <Row>
                <Col span={5} >
                    <Affix>
                        <CollectionList />
                    </Affix>
                </Col>

                <Col span={10}  >
                    <CollectionInfo />
                </Col>

                <Col span={9}  >
                    <JSONPanel />
                </Col>
            </Row>
        </div>
    }
}

export default Content;
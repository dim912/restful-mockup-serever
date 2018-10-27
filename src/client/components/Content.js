import React, { Component } from 'react'
import { Col, Row } from 'antd';
import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';
import JSONPanel from './JSONPanel';
import RestfulInfoPanel from './RestfulInfoPanel';


class Content extends Component {

    render() {
        return <div>
            <Row>
                <Col span={1}></Col>
                <Col span={11}>
                    <JSONPanel />
                </Col>
                <Col span={11}>
                    <RestfulInfoPanel />
                </Col>
                <Col span={1}></Col>
            </Row>
        </div>
    }
}

export default Content;
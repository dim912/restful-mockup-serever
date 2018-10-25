import React, { Component } from 'react'
import { Icon, Row, Col } from 'antd';
import 'antd/lib/icon/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/row/style/css';

import Header from './Header'
import Content from './Content'


class Main extends Component {
    render() {
        return <div>
            <Row type="flex" justify="center">
                <Col>
                    <Header />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Content />
                </Col>
            </Row>
            <Row>
            </Row>

        </div >
    }
}

export default Main
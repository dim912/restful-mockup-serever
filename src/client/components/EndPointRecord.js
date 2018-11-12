import React, { Component } from 'react'
import { Button, Input, Row, Col, Icon } from 'antd';
import 'antd/lib/button/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/icon/style/css';


class EndPointRecord extends Component {

    constructor(props) {
        super(props);
        this.state = { value: 'init value' };
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={18}>
                        <Input placeholder={this.state.value}></Input>
                    </Col>
                    <Col span={3}>
                        <Button type="primary" onClick={(e) => { this.setState({ 'value': 'mytestUrl' }) }}>run</Button>
                    </Col>
                    <Col span={3}>
                        <Button type="primary">copy</Button>
                    </Col>
                </Row >
            </div >
        )
    }
}

export default EndPointRecord
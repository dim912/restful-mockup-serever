import React, { Component } from 'react'
import { Col, Row } from 'antd';
import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';
import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/theme/github';
import { Button, Upload, Icon } from 'antd';
import 'antd/lib/button/style/css';
import 'antd/lib/upload/style/css';
import 'antd/lib/icon/style/css';



class Content extends Component {

    constructor(props) {
        super(props);
        this.state = { jsonCode: '[]', fontSize: 20, key: 1 }
        //this.onchage = this.onchage.bind(this);
        this.increaseFontSize = this.increaseFontSize.bind(this)
        this.decreaseFontSize = this.decreaseFontSize.bind(this)
        this.onchage = this.onchage.bind(this)

    }

    increaseFontSize(e, e1) {
        console.log('called')
        console.log(this.state.fontSize)
        this.setState({ fontSize: this.state.fontSize + 2, key: this.state.key + 1 })
    }

    decreaseFontSize(e, e1) {
        console.log('called')
        console.log(this.state.fontSize)
        this.setState({ fontSize: this.state.fontSize - 2, key: this.state.key + 1 })
    }

    onchage(v, e) {
        console.log(v)
        this.setState({ jsonCode: v })
    }

    render() {

        return <div>
            <Col span={1} >
            </Col>
            <Row>
                <Col span={11} >
                    <Row>
                        <AceEditor
                            key={this.state.key}
                            showPrintMargin={false}
                            value={this.state.jsonCode}
                            mode="json"
                            theme="github"
                            fontSize={this.state.fontSize}
                            // height="300px"
                            // width="1000px"
                            enableBasicAutocompletion={true}
                            onPaste={this.paste}
                            onChange={this.onchage}
                            name="UNIQUE_ID_OF_DIV"
                            editorProps={{ $blockScrolling: true }}
                        />
                    </Row>
                    <Row type="flex" justify="space-between">
                        <Button type="primary" shape="circle" icon="zoom-in" onClick={this.increaseFontSize} />
                        <Button type="primary" shape="circle" icon="zoom-out" onClick={this.decreaseFontSize} />
                        <Button size="small" onClick={() => { this.setState({ jsonCode: '[]' }) }}><Icon type="delete" />Clear</Button>
                        <Button size="small"><Icon type="copy" />copy</Button>
                        <Upload action="//jsonplaceholder.typicode.com/posts/" directory>
                            <Button size="small">
                                <Icon type="cloud-upload" /> upload </Button>
                        </Upload>
                        <Button icon="cloud-download" size="small">Download</Button>
                    </Row>
                </Col>
                <Col span={11} >
                </Col>
                <Col span={1} >
                </Col>
            </Row>
        </div >
    }
}

export default Content
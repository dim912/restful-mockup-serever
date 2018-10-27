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
import axios from 'axios'

class JSONPanel extends Component {

    constructor(props) {
        super(props);
        this.state = { jsonCode: '[]', correctJson: true, fontSize: 20, key: 1 }
        //this.onchage = this.onchage.bind(this);
        this.increaseFontSize = this.increaseFontSize.bind(this)
        this.decreaseFontSize = this.decreaseFontSize.bind(this)
        this.onchage = this.onchage.bind(this)
        this.onSave = this.onSave.bind(this)
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

        console.log(e)
        console.log(v)
        let res = v;

        try {
            if (Array.isArray(JSON.parse(v)) && JSON.parse(v).length != 0) {
                //                res = JSON.stringify(JSON.parse(v), null, 2)

            }
            this.setState({ correctJson: true })
            console.log('correct json')
            console.log(this.state.correctJson)

        }
        catch (err) {
            this.setState({ correctJson: false })
            console.log(this.state.correctJson)
            console.log(err)
        }
        console.log(this.state.key + 1)
        this.setState({ jsonCode: res })
    }

    onSave() {
        axios.post('/api/resources', {
            body: this.state.jsonCode
        })
            .then(resp => {
                console.log(resp)
            })
        console.log(this.state.jsonCode)
    }


    render() {

        return <div>
            <Row>
                <Col style={{ "border-style": "solid", "border-color": this.state.correctJson ? "#c4ebc4" : "#B23232" }}>
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
                            // showGutter={false}
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
                        <Button size="small" onClick={this.onSave}><Icon type="save" />save</Button>

                        <Upload action="//jsonplaceholder.typicode.com/posts/" directory>
                            <Button size="small">
                                <Icon type="cloud-upload" /> upload </Button>
                        </Upload>
                        <Button icon="cloud-download" size="small">Download</Button>
                    </Row>
                </Col>
            </Row>
        </div >
    }
}

export default JSONPanel
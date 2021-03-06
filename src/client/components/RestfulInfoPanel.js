
import React, { Component } from 'react'
import { Input, Button, Icon, Col, Row } from 'antd';
import 'antd/lib/input/style/css';
import 'antd/lib/icon/style/css';
import 'antd/lib/button/style/css';

class RestfulInfoPanel extends Component {

    constructor(props) {
        super(props);
        this.state = { text: 'dafdadsadsaf' };
    }

    render() {
        return <div>
            <div style={{ marginBottom: 16 }}>

                GET
                <Input addonBefore="POST" addonAfter={<Button type="default" icon="copy" size="small" onClick={(e) => {
                    navigator.clipboard.writeText(this.state.text)
                }} />}
                    defaultValue="http://mysite/asdfadssssssss/1"
                    onChange={(e) => { this.setState({ 'text': e.target.value }) }}
                />

            </div>
        </div>
    }
}

export default RestfulInfoPanel
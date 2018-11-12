import React, { Component } from 'react'
import { Menu, Icon, Button, Input } from 'antd';
import 'antd/lib/button/style/css';
import 'antd/lib/input/style/css';


import '../sass/style.scss';
const { SubMenu } = Menu;


class CollectionList extends Component {
    render() {

        return <div className="colletionList" >

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
                        <Button type="primary" icon="book" style={{
                            /*
                            'background-color': '#28a745',
                            'border-color': '#28a745'*/
                        }}> New</Button>
                    </div>
                </div>

                <div
                    style={{
                        'padding-top': '3%',
                        'padding-bottom': '3%'
                    }}>
                    <Input placeholder="Search Collection ..." />
                </div>


            </div>

            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
            // mode={this.state.mode}
            // theme={this.state.theme}
            >
                <Menu.Item key="1">
                    <Icon type="book" />
                    TestCollection
          </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="book" />
                    Classes
          </Menu.Item>

                <Menu.Item key="3">
                    <Icon type="book" />
                    Students
          </Menu.Item>
                <Menu.Item key="4">
                    <Icon type="book" />
                    Parents
          </Menu.Item>
                <Menu.Item key="5">
                    <Icon type="book" />
                    Teachers
          </Menu.Item>
                <Menu.Item key="6">
                    <Icon type="book" />
                    Registrations
          </Menu.Item>


                <Menu.Item key="21">
                    <Icon type="book" />
                    TestCollection
          </Menu.Item>
                <Menu.Item key="22">
                    <Icon type="book" />
                    Classes
          </Menu.Item>

                <Menu.Item key="23">
                    <Icon type="book" />
                    Students
          </Menu.Item>
                <Menu.Item key="24">
                    <Icon type="book" />
                    Parents
          </Menu.Item>
                <Menu.Item key="25">
                    <Icon type="book" />
                    Teachers
          </Menu.Item>
                <Menu.Item key="26">
                    <Icon type="book" />
                    Registrations
          </Menu.Item>

                <Menu.Item key="11">
                    <Icon type="book" />
                    TestCollection
          </Menu.Item>
                <Menu.Item key="12">
                    <Icon type="book" />
                    Classes
          </Menu.Item>

                <Menu.Item key="13">
                    <Icon type="book" />
                    Students
          </Menu.Item>
                <Menu.Item key="14">
                    <Icon type="book" />
                    Parents
          </Menu.Item>
                <Menu.Item key="15">
                    <Icon type="book" />
                    Teachers
          </Menu.Item>
                <Menu.Item key="16">
                    <Icon type="book" />
                    Registrations
          </Menu.Item>




            </Menu>
        </div >

    };
}

export default CollectionList;
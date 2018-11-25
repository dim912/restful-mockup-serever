import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import 'antd/lib/menu/style/css';
import 'antd/lib/icon/style/css';

import { Input, Row, Col } from 'antd';
import '../sass/style.scss'
import 'antd/lib/icon'

import 'antd/lib/Row/style/css';
import 'antd/lib/Col/style/css';

import MessageSvg from '../image/api.svg'; // path to your '*.svg' file.



const Search = Input.Search;

import { Divider } from 'antd';



const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends Component {

    state = {
        current: 'mail',
    }


    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    }


    render() {
        return (
            <div className="headerOuter">
                <div className="headerContent">


                    <Row type="flex" justify="start">

                        <Col span={1}>
                            <a href=".">
                                <Icon component={MessageSvg} style={{ fontSize: '37px', color: 'white' }} />
                            </a>
                        </Col>
                        <Col span={5}>
                            <Search
                                placeholder="input search text"
                                onSearch={value => console.log(value)}
                                style={{ width: 200 }} />
                        </Col>

                    </Row>

                </div>
            </div>
        );
    }
}



export default Header
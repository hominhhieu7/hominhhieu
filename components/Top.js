import React, { Component } from 'react';
import { Menu, Row, Col } from 'antd';
import {
    InfoCircleTwoTone,
    GithubOutlined,
    SettingOutlined,
} from '@ant-design/icons';


const { SubMenu } = Menu;

export default class Top extends Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    render() {
        return (
            <div>
                <Row>
                    <Col span={1}>
                        <a href="#">
                            <h2>
                                Hieu
              </h2>
                        </a>
                    </Col>
                    <Col span={16} offset={5}>
                        <Menu style={{ lineHeight: "63px" }} onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                            <Menu.Item key="infor">
                                <a href="#">
                                    <InfoCircleTwoTone style={{paddingRight: "10px"}} />
                                About Me
                                </a>
                            </Menu.Item>
                            <Menu.Item key="github">
                                <a href="https://github.com/hominhhieu7" target="_blank">
                                    <GithubOutlined  style={{paddingRight: "10px"}} />
                                 My Github
                                 </a>
                            </Menu.Item>
                            <SubMenu
                                title={
                                    <span className="submenu-title-wrapper">
                                        <SettingOutlined />
              Navigation Three - SubMenu
              </span>}>
                                <Menu.ItemGroup title="Item 1">
                                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.ItemGroup title="Item 2">
                                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                                </Menu.ItemGroup>
                            </SubMenu>
                            <Menu.Item key="alipay">
                                <a href="" rel="noopener noreferrer">
                                    Navigation Four - Link
          </a>
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </div>
        )
    }
}

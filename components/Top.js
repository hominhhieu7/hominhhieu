import React, { Component } from 'react';
import { Menu, Row, Col } from 'antd';
import {
    InfoCircleTwoTone,
    GithubOutlined,
    NotificationFilled,
} from '@ant-design/icons';
import Link from 'next/link'

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
                        <Link  href="/">
                            <a>
                                <h2>
                                    Hieu
                                </h2>
                            </a>
                        </Link>
                    </Col>
                    <Col span={16} offset={5}>
                        <Menu style={{ lineHeight: "63px" }} onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                            <Menu.Item key="infor">
                                <Link href="/about">
                                    <a>
                                        <InfoCircleTwoTone style={{ paddingRight: "10px" }} />
                                About Me
                                </a>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="github">
                                <a href="https://github.com/hominhhieu7" target="_blank">
                                    <GithubOutlined style={{ paddingRight: "10px" }} />
                                 My Github
                                 </a>
                            </Menu.Item>
                            <SubMenu
                                title={
                                    <span className="submenu-title-wrapper">
                                        <NotificationFilled />
                                            My Blog
                                    </span>}>
                                <Menu.Item key="setting:1">Coming soon</Menu.Item>
                                <Menu.Item key="setting:2">Coming soon</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Col>
                </Row>
            </div>
        )
    }
}

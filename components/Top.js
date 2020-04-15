import React, { Component } from 'react';
import { Menu, Row, Col } from 'antd';
import {
    ContactsOutlined,
    LoadingOutlined,
    InfoCircleTwoTone,
    GithubOutlined,
    NotificationFilled,
    HomeOutlined
} from '@ant-design/icons';
import Link from 'next/link'

const { SubMenu } = Menu;

export default class Top extends Component {
    state = {
        current: '',
    };

    handleClick = e => {
        this.setState({
            current: e.key,
        });
    };
    render() {
        return (
            <div>
                <Row>
                    <Col span={2}>
                        <Link href="/">
                            <a>
                                <h1>
                                    Hieu
                                </h1>
                            </a>
                        </Link>
                    </Col>
                    <Col span={16} offset={4}>
                        <Menu style={{ lineHeight: "63px" }} onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                        <Menu.Item key="home">
                                <Link href="/">
                                    <a>
                                        <HomeOutlined style={{ paddingRight: "10px" }} />
                                Home
                                </a>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="about">
                                <Link href="/about">
                                    <a>
                                        <InfoCircleTwoTone style={{ paddingRight: "10px" }} />
                                About Me
                                </a>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="contact">
                                <Link href="/contact">
                                    <a>
                                        <ContactsOutlined style={{ paddingRight: "10px" }} />
                                            Contact
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
                                            Blog
                                    </span>}>
                                <Menu.Item key="setting:1"> <LoadingOutlined />Coming soon</Menu.Item>
                                <Menu.Item key="setting:2"> <LoadingOutlined />Coming soon</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Col>
                </Row>
            </div>
        )
    }
}

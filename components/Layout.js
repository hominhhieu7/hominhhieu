import Head from 'next/head';
import React from 'react';
import { Layout } from 'antd';
import Top from './Top';
import Footers from './Footers';

const { Header, Footer, Content } = Layout;

export default class Layouts extends React.Component {


  render() {
    return (
      <div>
        <Head>
          <title>Ho Minh Hieu</title>
          {/* <link rel="icon" href="/hominhhieu.ico" /> */}
        </Head>
        <Layout>
          <Header style={{ backgroundColor: "#ffffff" }}>
            <Top />
          </Header>
          <Content>
          <div className="container">
            {this.props.children}
          </div>
          </Content>
          <Footer style={{ borderTop: "1px solid #eaeaea", backgroundColor: "#FFFF", padding: "0px" }}>
            <footer>
              <Footers />
            </footer>
          </Footer>
        </Layout>
        <style jsx>
          {`footer {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .container {
        min-height: 80vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      `}
        </style>
      </div>
    )
  }
}
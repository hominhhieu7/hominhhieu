import Head from 'next/head';
import React from 'react';
import { Layout } from 'antd';
import Top from '../components/Top';
import Footers from '../components/Footers';
import Contents from '../components/Contents';

const { Header, Footer, Content } = Layout;

export default class Home extends React.Component {


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
            <Contents/>
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
      }`}
        </style>
      </div>
    )
  }
}
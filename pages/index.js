import React from 'react';
import Router from 'next/router'
import Layouts from '../components/Layout';
import Home from './home';
import NProgress from 'nprogress'
Router.events.on('routeChangeStart', url => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
export default class Index extends React.Component {


  render() {
    return (
      <div>
        <Layouts>
          <Home />
        </Layouts>
      </div>
    )
  }
}
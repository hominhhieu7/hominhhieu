import React from 'react';
import Layouts from '../components/Layout';
import Home from './home';
export default class Index extends React.Component {


  render() {
    return (
      <div>
        <Layouts>
            <Home/>
        </Layouts>
      </div>
    )
  }
}
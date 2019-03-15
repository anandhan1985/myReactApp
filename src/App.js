import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import RouterConf from './components/RouterConf';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Header></Header>
        <RouterConf></RouterConf>
      </div>
    );
  }
}

export default App;

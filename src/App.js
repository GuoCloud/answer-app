import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Input, Icon } from 'antd';
import 'antd/dist/antd.css';
import { subscribeToWeb } from './socket/subscribeToWeb';

class App extends Component {
  handleClick() {
    subscribeToWeb((err, name) => alert(name));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <p className="App-intro">知识就是力量</p>
          </div>
          <h1 className="App-title">XXX知识竞赛</h1>
        </header>
        <body className="App-body">
          <Input
            placeholder="Enter your username"
            style = {{ width: '200px'}}
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
          <Button type='primary' onClick={this.handleClick}>登录</Button>
        </body>
      </div>
    );
  }
}

export default App;

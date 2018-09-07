import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './form';
import './style.css';
import Login from './login';
import SignUp from './sign-up';
import BasicExample from '././router/basic';
import UserInfo from './user-info';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BasicExample />
      </div>
    );
  }
}

export default App;
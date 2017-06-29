import React, { Component } from 'react'

import Header from './Header/Header'
import Body from './Body/Body'
import { Footer } from './Footer/Footer'
import LoginForm from './LoginForm/LoginForm'

import AppStore from '../store/AppStore'

import './App.css'


class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />

        <Body
          url="https://www.youtube.com/embed/gCcx85zbxz4"
        />
        <LoginForm/>
        <Footer />

      </div>
    );
  }
}

export default App

import React, { Component } from 'react'

import Header from './Header/Header'
import Body from './Body/Body'

import './App.css'


class App extends Component {
  render() {
    return (
      <div className="app">
        <Header
          projectName="Super Puper Duper Project"
        />
        <Body
          url="https://www.youtube.com/embed/gCcx85zbxz4"
        />
      </div>
    );
  }
}

export default App

import React, { Component } from 'react';

import Header from './Header/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header
          projectName="Super Puper Duper Project"
        />
      </div>
    );
  }
}

export default App;

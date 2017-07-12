import React, { Component } from 'react'
import DevTools from 'mobx-react-devtools'
import { BrowserRouter as Router } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

import Header from './Header/Header'
import Body from './Body/Body'
import { Footer } from './Footer/Footer'
import { Modal } from './Modal/Modal'

import './App.css'

@inject('app') @observer
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="app" style={{ ...this.props.app.showLogRegModal.addStyle }}>
            <Header />
            <Body />
            <Footer />
          </div>

            {
              this.props.app.showLogRegModal.status
                ? <Modal />
                : null
            }

            <DevTools />
        </div>
      </Router>
    );
  }
}

export default App

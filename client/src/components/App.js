import React, { Component } from 'react'
import DevTools from 'mobx-react-devtools'

import Header from './Header/Header'
import Body from './Body/Body'
import { Footer } from './Footer/Footer'
import { Modal } from './Modal/Modal'

import { observer, inject } from 'mobx-react'

import './App.css'

@inject('app') @observer
class App extends Component {
  render() {
    return (
      <div>
        <div className="app" style={{ ...this.props.app.showLoginModal.addStyle }}>
          <Header />
          <Body url="https://www.youtube.com/embed/gCcx85zbxz4" />
          <Footer />
        </div>

          {
            this.props.app.showLoginModal.status
              ? <Modal />
              : null
          }

          <DevTools />
      </div>
    );
  }
}

export default App

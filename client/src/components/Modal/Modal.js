import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import RegistrationForm from './RegistrationForm/RegistrationForm'
import LoginForm from './LoginForm/LoginForm'

import './Modal.css'

@inject ('app') @observer
export class Modal extends Component {
  componentDidMount() {
    this.setState({
      windowHeight: document.documentElement.clientHeight,
      modalHeight: this.box.offsetHeight
    })
  }

  constructor() {
    super()

    this.state = {}
    this.compareWindowAndModalSize = this.compareWindowAndModalSize.bind(this)
    this.checkModalHeight = this.checkModalHeight.bind(this)
  }

  render() {
    return (
      <div className="authModal">
        <div
          className="authModal__bg"
          onClick={() =>
            this.props.app.setShowLogRegModal({
              status:false,
              addStyle: {}
            })
          }
        ></div>

        <div
          className={
            this.compareWindowAndModalSize()
              ? 'authModal__content'
              : 'authModal__content authModal__content-scrollable'
          }
          ref={el => this.box = el}
          style={{
            height: this.compareWindowAndModalSize()
              ? 'auto'
              : this.state.windowHeight
          }}
        >

        {
          this.props.app.showLogRegModal.showCase
            ? <LoginForm cb={this.checkModalHeight} />
            : <RegistrationForm cb={this.checkModalHeight} />
        }
        </div>
      </div>
    )
  }

  checkModalHeight(value) {
    this.setState({modalHeight: value})
  }

  compareWindowAndModalSize() {
    return this.state.windowHeight > this.state.modalHeight
  }
}

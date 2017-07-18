import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'

import { withRouter } from 'react-router-dom'

import './LoginForm.css';

@inject('app', 'user') @observer
class LoginForm extends Component {
  constructor() {
    super()

    this.state = {
      emailInput: '',
      passInput: ''
    }

    this.handleLogInClick = this.handleLogInClick.bind(this)
    this.handleChangeForm = this.handleChangeForm.bind(this)
  }

  render() {
    return(
      <div className="authModal__content__form" ref={el => this.box = el}>
        <div className="authModal__content__form__header">
          <span className="authModal__content__form__header-title">
            Log in
          </span>
        </div>

        <div className="authModal__content__form__body">
          <div className="authModal__content__form__body__item">
            <label>E-mail:</label>
            <input
              className="authModal__content__form__body__item-field"
              type="email"
              name="login__email"
              value={this.state.emailInput}
              placeholder="Your e-mail"
              onChange={x => this.setState({emailInput: x.target.value})}
            />
          </div>

          <div className="authModal__content__form__body__item">
            <label>Password:</label>
            <input
              className="authModal__content__form__body__item-field"
              type="password"
              name="login__password"
              value={this.state.passInput}
              placeholder="Your password"
              onChange={x => this.setState({passInput: x.target.value})}
            />
          </div>

          <div className="authModal__content__form__body__item">
            <div className="authModal__content__form__body__item__block">
              <a className="authModal__content__form__body__item__block-link" href="">
                Forgot account?
              </a>
            </div>
          </div>

          <div className="authModal__content__form__body__item">
            <button
              className="authModal__content__form__body__item-button"
              onClick={this.handleLogInClick}
            >
              Log in
            </button>
          </div>
        </div>
        <div className="authModal__content__form__footer">
          <button
            className="authModal__content__form__footer-button"
            onClick={this.handleChangeForm}
          >
            Or Sign Up your Account
          </button>
        </div>
      </div>
    )
  }

  handleLogInClick() {
    const self = this;
    const url = `${self.props.app.ORIGIN}/auth`

    const requestBody = {
      email: self.state.emailInput,
      password: self.state.passInput
    }

    const waitResponse = new Promise((resolve, reject) => {
      resolve(self.props.user.loginUser(url, requestBody))
    })

    waitResponse
      .then(access => {
        self.props.app.closeModal(access)
        self.props.history.replace('/')
      })
  }

  handleChangeForm() {
    this.props.app.setShowLogRegModal({ showCase: false })
  }
}

export default withRouter(LoginForm)

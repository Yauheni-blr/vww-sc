import React, { Component } from 'react';
import axios from 'axios'
import { inject, observer } from 'mobx-react'

import './LoginForm.css';

@inject('app', 'user') @observer
export default class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      emailInput: '',
      passInput: ''
    }

    this.handleLogInClick = this.handleLogInClick.bind(this)
    this.handleChangeForm = this.handleChangeForm.bind(this)
  }

  render() {
    return(
      <div className="authModal__content__form">
        <div className="authModal__content__form__header">
          <span className="authModal__content__form__header-title">
            Log in
          </span>
        </div>

          {
            this.props.app.error.login
              ? <div>
                  <p>
                    {this.props.app.error.login}  
                  </p>
                </div>
              : null
          }

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
    const url = `${this.props.app.ORIGIN}/auth`

    const requestBody = {
      email: this.state.emailInput,
      password: this.state.passInput
    }

    axios
      .post(url, requestBody)
      .then(x => {
        if (!x.data.error) {
          this.props.user.changeUserData(x.data)
          this.props.app.setShowLogRegModal({ status: false, addStyle: {filter: 'none'} })
          this.props.app.setError('login', '')
        } else {
          this.props.app.setError('login', x.data.error)
        }
      })
      .catch(err => console.log(err))
  }

  handleChangeForm() {
    this.props.app.setShowLogRegModal({ showCase: false })
  }
}

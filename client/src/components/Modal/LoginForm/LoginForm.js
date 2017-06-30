import React, { Component } from 'react';
import axios from 'axios'
import { inject } from 'mobx-react'

import './LoginForm.css';

@inject('app')
export default class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      emailInput: '',
      passInput: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    return(
      <div className="authModal__content__login">
        <div className="authModal__content__login__header">
          <span className="authModal__content__login__header-title">
            Log in
          </span>
        </div>

        <div className="authModal__content__login__body">
          <div className="authModal__content__login__body__item">
            <label>Login:</label>
            <input
              className="authModal__content__login__body__item-field"
              type="email"
              name="login__email"
              value={this.state.emailInput}
              placeholder="Your e-mail"
              onChange={x => this.setState({emailInput: x.target.value})}
            />
          </div>

          <div className="authModal__content__login__body__item">
            <label>Password:</label>
            <input
              className="authModal__content__login__body__item-field"
              type="password"
              name="login__password"
              value={this.state.passInput}
              placeholder="Your password"
              onChange={x => this.setState({passInput: x.target.value})}
            />
          </div>

          <div className="authModal__content__login__body__item">
            <div className="authModal__content__login__body__item__block">
              <a className="authModal__content__login__body__item__block-link" href="">
                Forgot account?
              </a>
            </div>
          </div>

          <div className="authModal__content__login__body__item">
            <button
              className="authModal__content__login__body__item-button"
              onClick={this.handleClick}
            >
              Log in
            </button>
          </div>
        </div>
        <div className="authModal__content__login__footer">
          <a
            href=""
            className="authModal__content__login__footer-title"
          >
            or sign up your account
          </a>
        </div>
      </div>
    )
  }

  handleClick() {
    const url = `${this.props.app.ORIGIN}/auth`

    const requestBody = {
      email: this.state.emailInput,
      password: this.state.passInput
    }

    axios
      .post(url, requestBody)
      .then(x => console.log(x.data))
      .catch(err => console.log(err))
  }
}

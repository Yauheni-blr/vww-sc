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
      <div className="authModal">
        <div className="authModal__header">
          <span>
            Log in
          </span>
        </div>

        <div className="authModal__body">
          <span>Login:</span>
          <input
          className="authModal__login__email"
          type="email"
          name="login__email"
          value={this.state.emailInput}
          placeholder="Your e-mail"
          onChange={x => this.setState({emailInput: x.target.value})}
          />

          <span>Password:</span>
          <input
          className="authModal__login__password"
          type="password"
          name="login__password"
          value={this.state.passInput}
          placeholder="Your password"
          onChange={x => this.setState({passInput: x.target.value})}
          />

          <a className="authModal__forgot-account" href="">Forgot account?</a>

          <button
          className="authModal__login__button"
          onClick={this.handleClick}
          >
          Log in
          </button>
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

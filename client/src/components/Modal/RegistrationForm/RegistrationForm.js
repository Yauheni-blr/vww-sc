import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import { withRouter } from 'react-router-dom'

import './RegistrationForm.css'

@inject('app', 'user') @observer
class RegistrationForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      surname: '',
      email: '',
      password: '',
      department: 'IT',
      secretQuestion: 'Mother\'s maiden name',
      secretAnswer: ''
    }

    this.handleChangeForm = this.handleChangeForm.bind(this)
    this.handleChangeSelection = this.handleChangeSelection.bind(this)
    this.handleRegistr = this.handleRegistr.bind(this)
  }

  render() {
    return (
      <div className="authModal__content__form">
        <div className="authModal__content__form__header">
          <span className="authModal__content__form__header-title">
            Sing Up
          </span>
        </div>

        <div className="authModal__content__form__body">
          <div className="authModal__content__form__body__item">
            <span className="authModal__content__form__body__item-requirements">
              <span
                className="authModal__content__form__body__item-requirements-ahtung"
              >
                *
              </span>
                email must be on
              <span
                className="authModal__content__form__body__item-requirements-domain"
              >
                @vistula.edu.pl
              </span>
                domain
            </span>
          </div>

          <div className="authModal__content__form__body__item">
            <label>Name:</label>
            <input
              className="authModal__content__form__body__item-field"
              type="text"
              placeholder="Your name"
              onChange={x => this.setState({name: x.target.value})}
            />
          </div>

          <div className="authModal__content__form__body__item">
            <label>Surname:</label>
            <input
              className="authModal__content__form__body__item-field"
              type="text"
              placeholder="Your surname"
              onChange={x => this.setState({surname: x.target.value})}
            />
          </div>

          <div className="authModal__content__form__body__item">
            <label>E-mail:</label>
            <input
              className="authModal__content__form__body__item-field"
              type="email"
              placeholder="Your email"
              onChange={x => this.setState({email: x.target.value})}
            />
          </div>

          <div className="authModal__content__form__body__item">
            <label>Department:</label>
            <select
              className="authModal__content__form__body__item-field"
              value={this.state.department}
              onChange={x => this.setState({department: x.target.value})}
            >
              <option value="IT">Computer Science</option>
              <option value="Management">Management</option>
              <option value="Tourism">Tourism</option>
            </select>
          </div>

          <div className="authModal__content__form__body__item">
            <label>Password:</label>
            <input
              className="authModal__content__form__body__item-field"
              type="password"
              placeholder="Your password"
              onChange={x => this.setState({password: x.target.value})}
            />
          </div>

          <div className="authModal__content__form__body__item">
            <label>Confirm password:</label>
            <input
              className="authModal__content__form__body__item-field"
              type="password"
              placeholder="Your password"
              onChange={x => this.setState({rPassword: x.target.value})}
            />
          </div>

          <div className="authModal__content__form__body__item">
            <label>Secret question:</label>
            <select
              className="authModal__content__form__body__item-field"
              value={this.state.secretQuestion}
              onChange={x => this.setState({secretQuestion: x.target.value})}
            >
              <option value="Mother's maiden name">Mother's maiden name</option>
              <option value="Name of the best childhood friend">Name of the best childhood friend</option>
              <option value="Your hometown">Your hometown</option>
            </select>
          </div>

          <div className="authModal__content__form__body__item">
            <label>Secret answer:</label>
            <input
              className="authModal__content__form__body__item-field"
              type="text"
              placeholder="Your answer"
              onChange={x => this.setState({secretAnswer: x.target.value})}
            />
          </div>

          <div className="authModal__content__form__body__item">
            <button
              className="authModal__content__form__body__item-button"
              onClick={this.handleRegistr}
            >
              Sign Up
            </button>
          </div>
        </div>

        <div className="authModal__content__form__footer">
          <button
            className="authModal__content__form__footer-button"
            onClick={this.handleChangeForm}
          >
            back to Log In
          </button>
        </div>
      </div>
    )
  }

  handleChangeSelection(e) {
    this.setState({department: e.target.value})
  }

  handleChangeForm() {
    this.props.app.setShowLogRegModal({ showCase: true })
  }

  handleRegistr() {
    const self = this;
    const registrationUrl = `${self.props.app.ORIGIN}/user`
    const authUrl = `${self.props.app.ORIGIN}/auth`

    const requestBody = {
      name: self.state.name,
      surname: self.state.surname,
      email: self.state.email,
      department: self.state.department,
      password: self.state.password === self.state.rPassword ? self.state.password : '',
      secretQuestion: self.state.secretQuestion,
      secretAnswer: self.state.secretAnswer
    }

    const waitResponse = new Promise((resolve, reject) => {
      resolve(self.props.user.registrateUser(registrationUrl, requestBody))
    })

    if ([requestBody.name, requestBody.surname, requestBody.email,
         requestBody.department, requestBody.password, requestBody.secretQuestion, requestBody.secretAnswer].every(x => x.length > 0)) {

      waitResponse
        .then(data =>
          self.props.user.loginUser(authUrl, {email: requestBody.email, password: requestBody.password})
            .then(access => {
              self.props.app.closeModal(access)
              self.props.history.replace('/')
            })
        )
    }
    else console.log('Please fill all inputs')
  }
}

export default withRouter(RegistrationForm)

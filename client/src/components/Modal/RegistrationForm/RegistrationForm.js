import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import axios from 'axios'

import './RegistrationForm.css'

@inject('app') @observer
export default class RegistrationForm extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      name: '',
      surname: '',
      email: '',
      password: '',
      department: 'IT'
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
            <label>email:</label>
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
              className="authModal__content__form__body__item-select"
              value={this.state.department}
              onChange={x => this.setState({department: x.target.value})}
            >
              <option value="IT">Computer Science</option>
              <option value="Management">Management</option>
              <option value="Tourism">Tourism</option>
            </select>
          </div>

          <div className="authModal__content__form__body__item">
            <label>Password</label>
            <input 
              className="authModal__content__form__body__item-field"
              type="password" 
              placeholder="Your password"
              onChange={x => this.setState({password: x.target.value})}
            />
          </div>

          <div className="authModal__content__form__body__item">
            <label>Confirm password</label>
            <input 
              className="authModal__content__form__body__item-field"
              type="password" 
              placeholder="Your password"
              onChange={x => this.setState({rPassword: x.target.value})}
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
    const url = `${this.props.app.ORIGIN}/user`

    const user = {
      name: this.state.name,
      surname: this.state.surname,
      email: this.state.email,
      department: this.state.department,
      password: this.state.password === this.state.rPassword ? this.state.password : ''
    }

    if ([user.name, user.surname, user.email, user.department, user.password].every(x => x.length > 0))
      axios
        .post(url, user)
        .then(x => console.log(x))
        .catch(err => console.log(err))
    else
      console.log('Please fill all inputs')
    
  }
}
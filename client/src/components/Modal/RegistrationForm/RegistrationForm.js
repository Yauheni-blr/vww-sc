import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import './RegistrationForm.css'

@inject('app') @observer
export default class RegistrationForm extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      department: 'IT',
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleChangeSelection = this.handleChangeSelection.bind(this)
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
            />
          </div> 

          <div className="authModal__content__form__body__item">
            <label>Surname:</label>
            <input 
              className="authModal__content__form__body__item-field"
              type="text" 
              placeholder="Your surname"
            />
          </div>

          <div className="authModal__content__form__body__item">
            <label>email:</label>
            <input 
              className="authModal__content__form__body__item-field"
              type="email" 
              placeholder="Your email"
            />
          </div>

          <div className="authModal__content__form__body__item">
            <label>Department:</label>
            <select
              className="authModal__content__form__body__item-select"
              value={this.state.department}
              onChange={this.handleChangeSelection}
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
            />
          </div>

          <div className="authModal__content__form__body__item">
            <label>Confirm password</label>
            <input 
              className="authModal__content__form__body__item-field"
              type="password" 
              placeholder="Your password"
            />
          </div>

          <div className="authModal__content__form__body__item">
            <button className="authModal__content__form__body__item-button">
              Sign Up
            </button>
          </div>
        </div>

        <div className="authModal__content__form__footer">
          <a onClick={this.handleClick}>
            back to Log In
          </a>
        </div>
      </div>
    )
  }

  handleChangeSelection(e) {
    this.setState({department: e.target.value})
  }

  handleClick() {
    
  }
}
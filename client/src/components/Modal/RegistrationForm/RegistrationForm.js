import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'


@inject('app') @observer
export default class RegistrationForm extends Component {
  constructor(props) {
    super(props)

        this.handleClick = this.handleClick.bind(this)

  }

  render() {
    return (
      <div className="authModal__content__regForm">
        <div className="authModal__content__regForm__header">
          <span>Sign Up</span>
        </div>

        <div className="authModal__content__regForm__body"> 
          <div>
            <p>
              <span style={{color: 'red'}}>*</span> email must be on <span style={{color: 'green'}}>@vistula.edu.pl domain</span>
            </p>
          </div>
           
          <div className="authModal__content__regForm__body-item">
            <label>Name:</label>
            <input type="text" placeholder="Your name"/>
          </div> 

          <div className="authModal__content__regForm__body-item">
            <label>Surname:</label>
            <input type="text" placeholder="Your surname"/>
          </div>

          <div className="authModal__content__regForm__body-item">
            <label>email:</label>
            <input type="email" placeholder="Your email"/>
          </div>

          <div className="authModal__content__regForm__body-item">
            <label>Department:</label>
            <select>
              <option disabled selected="selected">Choose your department</option>
              <option value="IT">Computer Science</option>
              <option value="Management">Management</option>
              <option value="Tourism">Tourism</option>
            </select>
          </div>

          <div className="authModal__content__regForm__body-item">
            <label>Password</label>
            <input type="password" placeholder="Your password"/>
          </div>

          <div className="authModal__content__regForm__body-item">
            <label>Confirm password</label>
            <input type="password" placeholder="Your password"/>
          </div>

          <div className="authModal__content__regForm__body-item">
            <button>Sign Up</button>
          </div>

        </div>

        <div className="authModal__content__regForm__footer">
          <a onClick={this.handleClick}>
            back to Log In
          </a>
        </div>
      </div>
    )
  }

  handleClick() {
    this.props.app.setShowRegistrationModal(true, 'filter', 'blur(12px)')
  }
}
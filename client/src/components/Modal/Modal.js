import React from 'react'
import { inject, observer } from 'mobx-react'

import RegistrationForm from './RegistrationForm/RegistrationForm'
import LoginForm from './LoginForm/LoginForm'

import './Modal.css'

export const Modal = inject('app')(observer(props =>
  <div className="authModal">
    <div
      className="authModal__bg"
      onClick={() => props.app.setShowLogRegModal({status:false, addStyle: {}})}>
    </div>

    <div className="authModal__content">
      {
        props.app.showLogRegModal.showCase
          ? <LoginForm/>
          : <RegistrationForm />
      }
      
    </div>
  </div>
))

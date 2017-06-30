import React from 'react'
import { inject } from 'mobx-react'

import LoginForm from './LoginForm/LoginForm'

import './Modal.css'

export const Modal = inject('app')(props =>
  <div className="authModal">
    <div className="authModal__bg" onClick={() => props.app.setShowLoginModal()}></div>

    <div className="authModal__content"><LoginForm/></div>
  </div>)

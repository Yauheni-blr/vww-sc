import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import './Header.css'

@inject('app', 'user') @observer
export default class Header extends Component {
  constructor(props) {
    super(props)

    this.handleLogInBtn = this.handleLogInBtn.bind(this)
    this.handleLogOutBtn = this.handleLogOutBtn.bind(this)
  }

  render() {
    return (
        <div className="app__header">
          <div className="app__header__logo">
            <span className="app__header__logo-item">
              {this.props.app.projectName}
            </span>
          </div>

          {
            this.props.user.data.email
              ? <div className="app__header__auth">
                  <button className="app__header__auth-item" onClick={this.handleLogOutBtn}>
                    {this.props.user.getFullName}
                  </button>
                </div>
              : <div className="app__header__auth">
                  <button className="app__header__auth-item" onClick={this.handleLogInBtn}>
                    Log in
                  </button>
                </div>
          }
        </div>
      )
  }

  handleLogOutBtn() {
    this.props.user.resetUser()
  }

  handleLogInBtn() {
    this.props.app.setShowLogRegModal({
      status: true,
      showCase: true,
      addStyle: {
        filter: 'blur(12px)'
      }
    })
  }
}

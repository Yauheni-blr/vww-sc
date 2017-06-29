import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import './Header.css'

@inject('app') @observer
export default class Header extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    return (
        <div className="app__header">
          <div className="app__header__logo">
            <span className="app__header__logo-item">
              {this.props.app.projectName}
            </span>
          </div>

          <div className="app__header__auth">
            <button className="app__header__auth-item" onClick={this.handleClick}>
              Log in
            </button>
          </div>
        </div>
      )
  }

  handleClick() {
    this.props.app.setShowLoginModal(true, 'filter', 'blur(12px)')
  }
}
import React, { Component } from 'react'

import './Header.css'

export default class Header extends Component {
    render() {
      return (
          <div className="app__header">
            <div className="app__header__logo">
              <span className="app__header__logo-item">
                { this.props.projectName }
              </span>
            </div>

            <div className="app__header__auth">
              <button className="app__header__auth-item">
                Log in
              </button>
            </div>
          </div>
        )
    }
}
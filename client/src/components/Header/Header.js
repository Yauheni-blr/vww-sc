import React, { Component } from 'react'

import './Header.css'

export default class Header extends Component {
    render() {
      return (
          <div className="main__header">
            <div className="main__header__logo">
              <span className="main__header__logo-item">
                { this.props.projectName }
              </span>
            </div>

            <div className="main__header__auth">
              <button className="main__header__auth-item">
                Log in
              </button>
            </div>
          </div>
        )
    }
}
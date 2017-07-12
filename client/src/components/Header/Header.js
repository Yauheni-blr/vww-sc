import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter, NavLink } from 'react-router-dom'

import { MenuItem } from './MenuItem/MenuItem'
 
import './Header.css'

@inject('app', 'user') @observer
class Header extends Component {
  constructor(props) {
    super(props)

    this.loggedPrimaryList = [
      {
        type: 'menuItem',
        title: 'My Groups',
        url: this.props.app.routes.myGroups
      },
      {
        type: 'menuItem',
        title: 'My Schedule',
        url: this.props.app.routes.mySchedule
      }
    ]

    this.loggedSideList = [
      {
        type: 'menuItem',
        title: 'How to use?',
        url: this.props.app.routes.howToUse
      },
      {
        type: 'menuItem',
        title: 'Support',
        url: this.props.app.routes.support
      },
      {
        type: 'btn',
        title: 'Log out',
        cb: this.handleLogOutBtn.bind(this)
      }
    ]

    this.unLoggedSideList = [
      {
        type: 'menuItem',
        title: 'How to use?',
        url: this.props.app.routes.howToUse
      },
      {
        type: 'menuItem',
        title: 'Support',
        url: this.props.app.routes.support
      },
      {
        type: 'btn',
        title: 'Log In',
        cb: this.handleLogInBtn.bind(this)
      }
    ]
  }

  render() {
    return (
        <div className="app__header">
          <div className="app__header__menu">
            <div className="app__header__menu__primary">
              <ul className="app__header__menu__primary__list">
                <li className="app__header__menu__primary__list-item">
                  <NavLink
                    exact
                    className="app__header__menu__primary__list-item__projectName"
                    to={this.props.app.routes.home}
                  >
                    {this.props.app.projectName}
                  </NavLink>
                </li>
                {
                  this.props.user.data.email
                    ? this.loggedPrimaryList
                      .map((item, i) => 
                        <MenuItem 
                          title={item.title}
                          type={item.type}
                          key={i}
                          classPref="app__header__menu__primary__list"
                          url={item.url}
                        />)
                    : null
                }
              </ul>
            </div>
            <div className="app__header__menu__side">
              <ul className="app__header__menu__side__list">
                {
                  this.props.user.data.email
                    ? this.loggedSideList
                      .map((item, i) => 
                        <MenuItem
                          title={item.title}
                          type={item.type}
                          cb={item.cb}
                          key={i}
                          classPref="app__header__menu__side__list"
                          url={item.url}
                        />)
                    : this.unLoggedSideList
                      .map((item, i) => 
                        <MenuItem
                          title={item.title}
                          type={item.type}
                          cb={item.cb}
                          key={i}
                          classPref="app__header__menu__side__list"
                          url={item.url}
                        />
                      )
                }
              </ul>
            </div>
          </div>
        </div>
      )
  }

  handleLogOutBtn() {
    this.props.user.resetUser()
    this.props.history.go(0)
    this.props.history.replace('/protected')
    console.log(this.props.history)
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

export default withRouter(Header)
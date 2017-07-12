import React from 'react'
import { inject, observer } from 'mobx-react'
import { NavLink } from 'react-router-dom'

import './MenuItem.css'

const classNames = {
  LINK: 'app__header__menu__side__list-item__link',
  LINK_ACTIVE: 'app__header__menu__side__list-item__link-active'
}

export const MenuItem = inject('app', 'user')(observer(props =>
  <li
    className={
      props.purpose
        ? `${props.classPref}-item__projectName`
        : `${props.classPref}-item`
    }
  >
    {
      props.type === 'menuItem'
        ? <NavLink
            exact
            className={getActiveClass(props.app.currentRoute, props.url, classNames.LINK)}
            to={props.url}
          >
            {props.title}
          </NavLink>
        : <button className="app__header__menu__auth-item" onClick={props.cb}>
            {props.title}
          </button>
    }
  </li>
))

const getActiveClass = (currentRoute, route, originalClass) => 
  currentRoute === route
    ? [originalClass, classNames.LINK_ACTIVE].join(' ')
    : originalClass
  
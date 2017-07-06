import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'

import './MenuItem.css'

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
        ? props.purpose
            ? <span className={`${props.classPref}-item__projectName-item`}>{props.title}</span>
            : <Link className={`${props.classPref}-item__link`} to={props.url}>
                {props.title}
              </Link>
        : <button className="app__header__menu__auth-item" onClick={props.cb}>
            {props.title}
          </button>
    }
  </li>
))


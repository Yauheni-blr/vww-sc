import React from 'react'
import { inject, observer } from 'mobx-react'
import { NavLink } from 'react-router-dom'

import './GroupsItem.css'

export const GroupsItem = inject('app')(observer(props =>
  <li className="app__body__content__groups__list-item">
    <NavLink exact className={`${props.classPref}-item__link`} to={`${props.pathPref}/${props.id}`}>
      <div className={`${props.classPref}-item__link__head`}>
        <span className={`${props.classPref}-item__link__head-title`}>
          {props.department}
        </span>
      </div>
      <div className={`${props.classPref}-item__link__body`}>
        <span className={`${props.classPref}-item__link__body-title`}>
          {props.groupName}
        </span>
      </div>
    </NavLink>
  </li>
))


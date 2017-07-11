import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import { GroupsItem } from './GroupsItem/GroupsItem'

import './Groups.css'

@inject('app', 'user') @observer 
export default class Groups extends Component {
  componentDidMount() {
    this.props.user.getActiveGroups(`${this.props.app.ORIGIN}/`)
    this.props.app.setCurrentRoute(this.props.location.pathname)
  }

  render() {
    return (
      <div className="app__body__content__groups">
        <ul className="app__body__content__groups__list">
          {
            this.props.user.listOfGroups
              ? this.props.user.listOfGroups.map((group, i) => 
                  <GroupsItem 
                    type={group.type}
                    department={group.department}
                    groupName={group.groupName}
                    classPref="app__body__content__groups__list"
                    key={i}
                  /> 
                )
              : null
          }
        </ul>
      </div> 
    )
  }
}

import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import { GroupsItem } from './GroupsItem/GroupsItem'

import './Groups.css'

@inject('app', 'group', 'user') @observer 
export default class Groups extends Component {
  componentDidMount() {
    if (this.props.user.data.attachedGroups.length)
      this.props.group.getActiveGroups(
        this.props.app.ORIGIN
        + this.props.app.routes.myGroups
        + `/${this.props.user.data.attachedGroups}`
      )


    this.props.app.setCurrentRoute(this.props.location.pathname)
  }

  render() {
    return (
      <div className="app__body__content__groups">
        <ul className="app__body__content__groups__list">
          {
            this.props.group.listOfGroups
              ? this.props.group.listOfGroups.map((group, i) => 
                  <GroupsItem
                    id={group._id}
                    department={group.department}
                    groupName={group.name}
                    classPref="app__body__content__groups__list"
                    key={i}
                    pathPref={this.props.location.pathname}
                  /> 
                )
              : null
          }
        </ul>
      </div> 
    )
  }
}

import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import './SingleGroup.css'

@inject('app', 'user') @observer
export default class SingleGroup extends Component {
  componentDidMount() {
    if (!this.props.user.listOfGroups)
      this.props.user.getSingleGroup(this.props.app.ORIGIN + this.props.location.pathname)
    else {
      const group = this.props.user.listOfGroups.find(group => this.props.location.pathname.substring(1) === group.groupName)
      this.props.user.setSingleGroup(group)
    }
  }
 
  render() {
    return (
      <h1>
        {
          this.props.user.singleGroup
            ? <div>
                <h1>{ this.props.user.singleGroup.groupName }</h1>
                <h4>{ this.props.user.singleGroup.department }</h4>
              </div>
            : null
        }
      </h1>
    )
  }

}

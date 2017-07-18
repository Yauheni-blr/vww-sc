import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import './SingleGroup.css'

@inject('app', 'student', 'group') @observer
export default class SingleGroup extends Component {
  componentDidMount() {
    if (!this.props.group.listOfGroups)
      this.props.group.getSingleGroup(this.props.app.ORIGIN + this.props.location.pathname)
    else {
      const group = this.props.group.listOfGroups.find(group => this.props.match.params.name === group._id)
      this.props.group.setSingleGroup(group)
    }
  }
 
  render() {
    return (
      <div>
        {
          this.props.group.singleGroup
            ? <div>
                <h1>{ this.props.group.singleGroup.name }</h1>
                <h4>{ this.props.group.singleGroup.department }</h4>
              </div>
            : null
        }
      </div>
    )
  }
}

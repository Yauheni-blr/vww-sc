import React, { Component } from 'react'
import { inject } from 'mobx-react' 

import './Schedule.css'

@inject('app')
export default class Schedule extends Component {
  componentDidMount() {
    this.props.app.setCurrentRoute(this.props.location.pathname)
  }

  render() {
    return <div>My Schedule</div>
  }
}
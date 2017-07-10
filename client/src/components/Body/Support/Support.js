import React, { Component } from 'react'
import { inject } from 'mobx-react' 

import './Support.css'

@inject('app')
export default class Support extends Component {
  componentDidMount() {
    this.props.app.setCurrentRoute(this.props.location.pathname)
  }

  render() {
    return <div>Support</div>
  }
}
import React, { Component } from 'react'
import { inject } from 'mobx-react' 

import './HowToUse.css'

@inject('app')
export default class HowToUse extends Component {
  componentDidMount() {
    this.props.app.setCurrentRoute(this.props.location.pathname)
  }

  render() {
    return <div>How To Use</div>
  }
}
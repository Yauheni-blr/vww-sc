import React, { Component } from 'react'
import { inject } from 'mobx-react'

import './Home.css'

@inject('app')
export default class Home extends Component {
  componentDidMount() {
    this.props.app.setCurrentRoute(this.props.location.pathname)
  }

  render() {
    return <div className="app__body__content__home">Home Page</div>
  }
}
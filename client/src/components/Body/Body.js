import React, { Component } from 'react'
import { inject } from 'mobx-react'
import { Route } from 'react-router-dom'

import Groups from './Groups/Groups'
import Schedule from './Schedule/Schedule'
import HowToUse from './HowToUse/HowToUse'
import Support from './Support/Support'

import './Body.css'

@inject('app')
export default class Body extends Component {
  render() {
    return (
      <div className="app__body">
        <div className="app__body__content">
          <Route exact path={this.props.app.routes.myGroups} component={Groups} />
          <Route exact path={this.props.app.routes.mySchedule} component={Schedule} />
          <Route exact path={this.props.app.routes.howToUse} component={HowToUse} />
          <Route exact path={this.props.app.routes.support} component={Support} />
        </div>
      </div>
    )
  }
}
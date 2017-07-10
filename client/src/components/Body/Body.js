import React, { Component } from 'react'
import { inject } from 'mobx-react'
import { Route } from 'react-router-dom'

import Groups from './Groups/Groups'
import Schedule from './Schedule/Schedule'
import HowToUse from './HowToUse/HowToUse'
import Support from './Support/Support'
import SingleGroup from './Groups/SingleGroup/SingleGroup'

import './Body.css'

@inject('app')
export default class Body extends Component {
  render() {
    return (
      <div className="app__body">
        <div className="app__body__content">
          <Route exact path={this.props.app.routes.myGroups} component={Groups} />
          <Route path={this.props.app.routes.mySchedule} component={Schedule} />
          <Route path={this.props.app.routes.howToUse} component={HowToUse} />
          <Route path={this.props.app.routes.support} component={Support} />
          <Route path={this.props.app.routes.singleGroup} component={SingleGroup}/> 
        </div>
      </div>
    )
  }
}
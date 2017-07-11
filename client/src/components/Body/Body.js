import React, { Component } from 'react'
import { inject } from 'mobx-react'
import { Route, Redirect } from 'react-router-dom'

import Groups from './Groups/Groups'
import Schedule from './Schedule/Schedule'
import HowToUse from './HowToUse/HowToUse'
import Support from './Support/Support'
import { Protected } from './Protected/Protected'
import SingleGroup from './Groups/SingleGroup/SingleGroup'

import './Body.css'

const PrivateRoute = 
  ({ user, component: Component, access, ...rest }) =>
    <Route
      {...rest}
      render={
        props =>
          access
            ? <Component {...props} />
            : <Redirect to={{
                  pathname: '/protected',
                  state: { from: props.location }
                }}
              />
        } 
    />

@inject('app', 'user')
export default class Body extends Component {
  render() {
    const authStatus = this.props.user.authStatus
    return (
      <div className="app__body">
        <div className="app__body__content">
          <PrivateRoute exact path={this.props.app.routes.myGroups} access={authStatus} component={Groups} />
          <PrivateRoute path={this.props.app.routes.mySchedule} access={authStatus} component={Schedule} />
          <PrivateRoute path={this.props.app.routes.howToUse} access={authStatus} component={HowToUse} />
          <PrivateRoute path={this.props.app.routes.support} access={authStatus} component={Support} />
          <PrivateRoute path={this.props.app.routes.singleGroup} access={authStatus} component={SingleGroup}/> 
          <Route
            path="/protected"
            component={Protected}
          />
        </div>
      </div>
    )
  }
}


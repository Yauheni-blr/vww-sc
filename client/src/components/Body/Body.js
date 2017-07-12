import React, { Component } from 'react'
import { inject } from 'mobx-react'
import { Route, Redirect } from 'react-router-dom'

import Home from './Home/Home'
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
          <Route exact path={this.props.app.routes.home} component={Home} />
          <PrivateRoute exact path={this.props.app.routes.myGroups} access={authStatus} component={Groups} />
          <PrivateRoute exact path={this.props.app.routes.mySchedule} access={authStatus} component={Schedule} />
          <PrivateRoute exact path={this.props.app.routes.singleGroup} access={authStatus} component={SingleGroup}/> 
          <Route exact path={this.props.app.routes.howToUse} component={HowToUse} />
          <Route exact path={this.props.app.routes.support} component={Support} />
          <Route exact
            path="/protected"
            component={Protected}
          />
        </div>
      </div>
    )
  }
}


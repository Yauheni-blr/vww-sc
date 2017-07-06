import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import './Groups.css'

@inject('user') @observer 
export default class Groups extends Component {

  render() {
    return this.props.user.data.email 
      ? <div>My Groups</div> 
      : <div>User needs to log in</div>
  }
}
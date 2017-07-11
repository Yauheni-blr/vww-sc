import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import './Groups.css'

@inject('user', 'app') @observer 
export default class Groups extends Component {

  render() {
    return <div>My Groups</div>
  }
}
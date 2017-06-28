import React, { Component } from 'react'

import './Body.css'

export default class Body extends Component {
  render() {
    return (
      <div className="app__body">
        <div className="app__body__instruction">
          <iframe 
            title="videoFrame"
            width="560"
            height="315"
            src={this.props.url}
            frameBorder="0"
            allowFullScreen
          >
          </iframe>
        </div>
      </div>
    )
  }

}
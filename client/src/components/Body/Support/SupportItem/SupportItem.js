import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import './SupportItem.css'

@inject('user') @observer
export default class SupportItem extends Component {
  constructor() {
    super()

    this.state = { value: '' }
  }

  render() {
    return (
      <div>
        {
        this.props.type
          ? <div className="app__body__content__support__feedbackform__content__feedback__item">
              <label>{this.props.label}</label>
              
              {
                this.props.user.authStatus
                  ? <input
                      className="app__body__content__support__feedbackform__content__feedback__item-field"
                      type={this.props.type}
                      value={this.props.user.data[this.props.label]}
                      placeholder={this.props.placeholder}
                      onChange={e => this.props.cb(e)}
                      disabled
                    />
                  : <input
                      className="app__body__content__support__feedbackform__content__feedback__item-field"
                      type={this.props.type}
                      value={this.props.value}
                      placeholder={this.props.placeholder}
                      onChange={e => this.props.cb(e)}
                    />
              }
            </div>
          : <div className="app__body__content__support__feedbackform__content__feedback__item">
              <textarea
                className="app__body__content__support__feedbackform__content__feedback__item-field"
                rows={this.props.rows}
                value={this.props.value}
                placeholder={this.props.placeholder}
                onChange={e => this.props.cb(e)}
              ></textarea>
            </div>
        }
      </div>
    )
  }
}
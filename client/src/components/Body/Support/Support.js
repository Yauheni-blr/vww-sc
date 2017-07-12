import React, { Component } from 'react'
import { inject } from 'mobx-react' 

import SupportItem from './SupportItem/SupportItem'

import './Support.css'

@inject('app', 'user')
export default class Support extends Component {
  componentDidMount() {
    this.props.app.setCurrentRoute(this.props.location.pathname)

    if (this.props.user.authStatus)
      this.initUserData()
  }
  
  constructor() {
    super()
    
    this.state = {
      name: '',
      surname: '',
      email: '',
      problem: ''
    }

    this.listOfFields = [
      {
        label: 'name',
        type: 'text',
        placeholder: 'John',
        cb: x => this.setState({name: x.target.value})
      },
      {
        label: 'surname',
        type: 'text',
        placeholder: 'Doe',
        cb: x => this.setState({surname: x.target.value})
      },
      {
        label: 'email',
        type: 'email',
        placeholder: 'john.doe@gmail.com',
        cb: x => this.setState({email: x.target.value})
      },
      {
        placeholder: 'Don\'t work something',
        rows: '5',
        cb: x => this.setState({problem: x.target.value})
      }
    ]

    this.handleFeedbackClick = this.handleFeedbackClick.bind(this)
    this.initUserData = this.initUserData.bind(this)
  }

  render() {
    return (
      <div className="app__body__content__support">
        <div className="app__body__content__support__feedbackform">
          <div className="app__body__content__support__feedbackform__header">
            <div className="app__body__content__support__feedbackform__header-title">
              Describe your problem
            </div>
          </div>

          <div className="app__body__content__support__feedbackform__content">
            <div className="app__body__content__support__feedbackform__content__description">
              <div className="app__body__content__support__feedbackform__content__description__item">
              If you have problem with access or you find some other problem, feed back us and try to explain your problem
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at leo magna. Integer at massa eget ligula congue varius in eleifend augue. Donec lacinia ut lorem ornare mollis. Nullam eu sapien nec urna pharetra facilisis. Proin bibendum malesuada rhoncus. Praesent quis lorem ac libero ullamcorper pretium. Morbi egestas orci libero, et convallis dolor consectetur id. Praesent euismod mi vel lacus aliquam, non sagittis felis molestie. Phasellus sed blandit nisi.
              </div>
            </div>
            <div className="app__body__content__support__feedbackform__content__feedback">
              {
                this.listOfFields.map((item, i) =>
                  <SupportItem
                    {...item}
                    value={this.state[item.label]}
                    key={i}
                  />
                )
              }

              <div className="app__body__content__support__feedbackform__content__feedback__item">
                <button
                className="app__body__content__support__feedbackform__content__feedback__item-button"
                onClick={this.handleFeedbackClick}
                >
                  Feed back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  initUserData() {
    this.setState({
      name: this.props.user.data.name,
      surname: this.props.user.data.surname,
      email: this.props.user.data.email,
    })
  }

  handleFeedbackClick() {
    const self = this;

    const requestBody = {
      name: self.state.name,
      surname: self.state.surname,
      email: self.state.email,
      desription: self.state.problem
    }

    console.log(requestBody);
  }
}

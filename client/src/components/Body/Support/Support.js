import React, { Component } from 'react'

import './Support.css'

export default class Support extends Component {
  constructor() {
    super()

    this.state = {
      nameInput: '',
      surnameInput: '',
      emailInput: '',
      desriptionInput: ''
    }
    this.handleFeedbackClick = this.handleFeedbackClick.bind(this)
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
              <div className="app__body__content__support__feedbackform__content__feedback__item">
                <label>Name:</label>
                <input
                  className="app__body__content__support__feedbackform__content__feedback__item-field"
                  type="text"
                  name="feedback__name"
                  value={this.state.nameInput}
                  placeholder="Your name"
                  onChange={x => this.setState({nameInput: x.target.value})}/>
              </div>

              <div className="app__body__content__support__feedbackform__content__feedback__item">
                <label>Surname:</label>
                <input
                  className="app__body__content__support__feedbackform__content__feedback__item-field"
                  type="text"
                  name="feedback__surname"
                  value={this.state.surnameInput}
                  placeholder="Your surname"
                  onChange={x => this.setState({surnameInput: x.target.value})}/>
              </div>

              <div className="app__body__content__support__feedbackform__content__feedback__item">
                <label>E-mail:</label>
                <input
                  className="app__body__content__support__feedbackform__content__feedback__item-field"
                  type="email"
                  name="feedback__email"
                  value={this.state.emailInput}
                  placeholder="Your e-mail"
                  onChange={x => this.setState({emailInput: x.target.value})}/>
              </div>

              <div className="app__body__content__support__feedbackform__content__feedback__item">
                <textarea
                  className="app__body__content__support__feedbackform__content__feedback__item-field"
                  rows="5"
                  value={this.state.desriptionInput}
                  onChange={x => this.setState({desriptionInput: x.target.value})}
                  placeholder="Describe your problem">
                </textarea>
              </div>

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

    handleFeedbackClick() {
      const self = this;

      const requestBody = {
        name: self.state.nameInput,
        surname: self.state.surnameInput,
        email: self.state.emailInput,
        desription: self.state.desriptionInput
      }

      console.log(requestBody);
  }
}

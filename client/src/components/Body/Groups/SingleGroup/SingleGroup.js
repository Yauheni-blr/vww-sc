import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { NavLink } from 'react-router-dom'

import './SingleGroup.css'

@inject('app', 'group') @observer
export default class SingleGroup extends Component {
  componentDidMount() {
    this.props.group.getSingleGroup(this.props.app.ORIGIN, this.props.location.pathname)
    this.props.app.setCurrentRoute(this.props.app.routes.myGroups)
  }

  componentWillUnmount() {
    this.props.group.resetListOfStudents()
  }

  constructor() {
    super()
    this.handleBackBtn = this.handleBackBtn.bind(this)
  }

  handleBackBtn() {
    this.props.history.goBack()
  }
 
  render() {
    return (
      <div className="app__body__content__singleGroup">
        {
          this.props.group.singleGroup
            ? <div className="app__body__content__singleGroup__content">
                <div className="app__body__content__singleGroup__content__header">
                  <div className="app__body__content__singleGroup__content__header__primary">
                    <span
                      onClick={this.handleBackBtn}
                      className="app__body__content__singleGroup__content__header__primary-backBtn"
                    >
                      &larr;
                    </span>
                    <span className="app__body__content__singleGroup__content__header__primary-title">
                      { this.props.group.singleGroup.name }
                    </span>
                    <span className="app__body__content__singleGroup__content__header__primary-department">
                      { this.props.group.singleGroup.department }
                    </span>
                  </div>
                  <input
                    className="app__body__content__singleGroup__content__header__side-finder"
                    type="text"
                    placeholder="Find Student"
                  />
                </div>

                <div className="app__body__content__singleGroup__content__body">
                    {
                      this.props.group.listOfStudents.length
                        ? <ul className="app__body__content__singleGroup__content__body--studentList">
                            <li className="app__body__content__singleGroup__content__body--studentList-headItem">
                              List of students
                            </li>
                            {
                              this.props.group.listOfStudents.map(
                                (student, i) =>
                                  <li
                                    className="app__body__content__singleGroup__content__body--studentList-item"
                                    key={i}
                                  >
                                    <NavLink
                                      className="app__body__content__singleGroup__content__body--studentList-itemLink"
                                      to="#"
                                    >
                                      {student.name + ' ' + student.surname}
                                    </NavLink>
                                  </li>
                              )
                            }
                          </ul>
                        : <p>There is no students yet</p>
                    }
                </div>
              </div>
            : <p>Loading . . .</p>
        }
      </div>
    )
  }
}

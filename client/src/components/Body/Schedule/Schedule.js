import React, { Component } from 'react'
import { inject, observer } from 'mobx-react' 

import { ScheduleItem } from "./ScheduleItem/ScheduleItem"

import './Schedule.css'

@inject('app', 'user') @observer
export default class Schedule extends Component {
  componentDidMount() {
    this.props.app.setCurrentRoute(this.props.location.pathname)
    this.props.user.getSchedule(this.props.app.ORIGIN + this.props.app.routes.mySchedule)
    
  }

  render() {
    return (
      <div className="app__body__content__schedule">
        <ul className="app__body__content__schedule__list">
          {
            this.props.user.mySchedule
              ? this.props.user.mySchedule.map((schedule, i) =>
                  <ScheduleItem
                    date = {schedule.date}
                    time = {schedule.time}
                    classRoom = {schedule.classRoom}
                    groupName = {schedule.groupName}
                    subjectName = {schedule.subjectName}
                    key = {i}
                    classPref = "app__body__content__schedule__list"
                  />
                )
              : null
          }
        </ul>
      </div>
    )
  }
}


// date: '12.07.2017',
//     time: '10:00',
//     classRoom: 'A2',
//     groupName: 'TP-A3IE',
//     subjectName: 'Math for Economics'
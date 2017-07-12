const Schedule = require('../models/schedule.model')

var scheduleForTest = [
  {
    date: '12.07.2017',
    time: '9:00',
    classRoom: 'A4',
    groupName: 'TR-S3ES',
    subjectName: 'Math for Informatics'
  },
  {
    date: '12.07.2017',
    time: '10:00',
    classRoom: 'A2',
    groupName: 'TP-A3IE',
    subjectName: 'Math for Economics'
  },
  {
    date: '12.07.2017',
    time: '12:00',
    classRoom: '313',
    groupName: 'PR-Q4WP',
    subjectName: 'Math for Math'
  },
  {
    date: '12.07.2017',
    time: '17:00',
    classRoom: '116',
    groupName: 'UV-S3ES',
    subjectName: 'Java lessons'
  }
]

module.exports = function(app) {
  app.get('/my-schedule', getSchedule)

}

function getSchedule(req, res) {
  res.send(scheduleForTest)
}
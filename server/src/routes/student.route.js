const Student = require('../models/student.model')

module.exports = function(app) {

  app.get('/all-students', getAllStudents)
  app.get('/all-students/:id', getSingleStudentFromAll)
  app.get('/my-students/:ids', getMyStudents)

  app.post('/student', createStudent)

}

function createStudent(req, res) {

  const student = new Student(req.body)

  student.save(err => {
    if (err) {
       res.status(200).send(`Student with studentID: ${req.body.studentID} -> allready exists`)
    } else {
      console.log(`Student with studentID: ${req.body.studentID} successfully created`)

      res.status(201).send({})
    }
  })
}

function getAllStudents(req, res) {
  Student.find({}, function(err, payload) {
    if(payload)
      res.send(payload)
  })
}

function getSingleStudentFromAll(req, res) {
  Student.findOne({ _id: req.params.id }, function(err, payload) {
    if(payload)
      res.send(payload)
  })
}

function getMyStudents(req, res) {
  const arr = req.params.ids.split(',')

  Student.find({ _id: {$in: arr}}, function(err, payload) {
      res.status(200).send(payload)
  })
}
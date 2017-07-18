const mongoose = require('mongoose')

const Schema = mongoose.Schema

const studentSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  studentID: { type: String, required: true, unique: true },
  country: { type: String, required: true },
  dob: { type: Date, required: true },
  photo: { type: String, default: '' },
  studentNotes: { type: Array, default: [] },
  attachedSubjects: { type: Array, default: [] }
})


const Student = mongoose.model('Students', studentSchema)

module.exports = Student
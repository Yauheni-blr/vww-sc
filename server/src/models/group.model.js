const mongoose = require('mongoose')

const Schema = mongoose.Schema

const groupSchema = new Schema({
  name: { type: String, required: true, unique: true },
  department: { type: String, required: true },
  attachedStudents: { type: Array, default: [] },
  attachedSubjects: { type: Array, default: [] },
  startStudyAt: { type: Date, require: true },
  finishStudyAt: { type: Date, required: true },
  schedule: { type: Array, default: [] }
})

const Group = mongoose.model('Groups', groupSchema)


module.exports = Group

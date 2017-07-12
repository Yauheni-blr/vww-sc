const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  name: { type: String, require: true },
  surname: { type: String, require: true },
  email: { type: String, require: true },
  department: { type: String, require: true },
  password: { type: String, require: true },
  secretQuestion: { type: String, require: true },
  secretAnswer: { type: String, require: true, trim: true },
  createdAt: { type: Date, default: Date.now }
})

const User = mongoose.model('Users', userSchema)

export default User
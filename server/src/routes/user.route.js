const { compare } = require('bcrypt')

const User = require('../models/user.model')
const { crypt } =  require('../utils/utils')

module.exports = function(app) {

  // app.get('/user', getListOfUsers)
  // app.get('/user/:name', getSingleUser)

  app.post('/user', createUser)
  app.post('/auth', authUser)

  // app.put('/user/:email', updateUser)

  // app.delete('/user/:email', deleteUser)

}

// create user
function createUser(req, res) {
  crypt(req.body.password)
    .then(hashPwd => {
      const user = new User({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        department: req.body.department,
        password: hashPwd,
        secretQuestion: req.body.secretQuestion,
        secretAnswer: req.body.secretAnswer
      })
      
    user.save(err => {
      if (err) {
        res.status(200).send('User with this email already exists')
      } else {
        console.log(`User with email: ${req.body.email} created successfully`)

        res.status(201).send({
          name: req.body.name,
          surname: req.body.surname,
          email: req.body.email,
          department: req.body.department,
          secretQuestion: req.body.secretQuestion
        })
      }
    })
  })
}

//auth user
function authUser(req, res) {
  User.findOne({ email: req.body.email }, function(err, payload) {
    if (payload) {
      compare(req.body.password, payload.password, function(err, result) {
        if (result === true) {
          res.status(200).send({
            name: payload.name,
            surname: payload.surname,
            email: payload.email,
            department: payload.department,
            secretQuestion: payload.secretQuestion
          })
        } else {
          res.status(200).send('Wrong password')
        }
      })
    } else {
      res.status(200).send('Wrong email')
    }
  })
}

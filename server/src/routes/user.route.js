const User = require('../models/user.model')

const { crypt } = require('../utils/utils')


module.exports = function(app) {

  app.get('/user', userHandler)
  app.get('/user/:name', nameHandler)

  app.post('/user', createUser)
  app.post('/auth', authUser)

  app.put('/user/:email', updateUser)

  app.delete('/user/:email', deleteUser)

}

function createUser(req, res) {
  crypt(req.body.password)
    .then(hashPwd => {
      const user = new User({
        name: req.body.name,
        surname:  req.body.surname,
        email: req.body.email,
        department: req.body.department,
        password: hashPwd,
        secretQuestion: req.body.secretQuestion,
        secretAnswer: req.body.secretAnswer 
      })
    })
  const hashPwd = crypt("Hello")
  res.send(hashPwd)
}



// function userHandler(req, res) {
//   res.send(users)
// }

// function nameHandler(req, res) {
//   var name = req.params.name;
//   res.send('Hello ' + name)
// }

// function createUser(req, res) {
//   var btn = true

//   for (var i = 0; i < users.length; i++) {
//     if (users[i].email === req.body.email) {
//       btn = false
//     }
//   }

//   if(btn) {
//     users.push({
//       name: req.body.name,
//       surname: req.body.surname,
//       email: req.body.email,
//       password: req.body.password,
//       department: req.body.department
//     })

//     console.log('User successfuly created')
//     res.status(201).send()
//   } else {
//     res.send('Sorry email already used')
//   }
// }

// function authUser(req, res) {
//   var userIndex;

//   for (var i = 0; i < users.length; i++) {
//     if (users[i].email === req.body.email
//         && users[i].password === req.body.password) {
//       userIndex = i
//     }
//   }

//   if(userIndex >= 0) {
//     console.log('User Successfuly authorized');
//     res.status(200).send({
//       name: users[userIndex].name,
//       surname: users[userIndex].surname,
//       email: users[userIndex].email,
//       department: users[userIndex].department
//     })
//   } else {
//     res.status(200).send({error: 'Something wrong =)'})
//   }
// }

// function updateUser(req, res) {
//   var userIndex;

//   for (var i = 0; i < users.length; i++) {
//     if (users[i].email === req.params.email) {
//       userIndex = i
//     }
//   }

//   if(userIndex >= 0) {
//     users[userIndex].name = req.body.name || users[userIndex].name
//     users[userIndex].surname = req.body.surname || users[userIndex].surname
//     users[userIndex].email = req.body.email || users[userIndex].email
//     users[userIndex].password = req.body.password ||users[userIndex].password

//     res.send('data changed')
//   } else {
//     res.send('non registered email')
//   }

// }

// function deleteUser(req, res) {
//   var userIndex;

//   for (var i = 0; i < users.length; i++) {
//     if (users[i].email === req.params.email) {
//       userIndex = i
//     }
//   }

//   if(userIndex >= 0) {
//     users.splice(userIndex, 1)
//     res.send('data deleted')
//   } else {
//     res.send('User non found')
//   }
// }
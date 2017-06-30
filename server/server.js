var express = require('express')
var cors = require('cors')
var app = express()

var bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

var users = [];

app.get('/', rootHandler)
app.get('/user', userHandler)
app.get('/user/:name', nameHandler)

app.post('/user', createUser)
app.post('/auth', authUser)

app.put('/user/:email', updateUser)

app.delete('/user/:email', deleteUser)

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
})


function rootHandler(req, res) {
  res.send('Hello World')
}

function userHandler(req, res) {
  res.send(users)
}

function nameHandler(req, res) {
  var name = req.params.name;
  res.send('Hello ' + name)
}

function createUser(req, res) {
  var btn = true

  for (var i = 0; i < users.length; i++) {
    if (users[i].email === req.body.email) {
      btn = false
    }
  }

  if(btn) {
    users.push({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password: req.body.password,
      department: req.body.department
    })

    res.send('Successfuly created')
  } else {
    res.send('Sorry email already used')
  }
}

function updateUser(req, res) {
  var userIndex;

  for (var i = 0; i < users.length; i++) {
    if (users[i].email === req.params.email) {
      userIndex = i
    }
  }

  if(userIndex >= 0) {
    users[userIndex].name = req.body.name || users[userIndex].name
    users[userIndex].surname = req.body.surname || users[userIndex].surname
    users[userIndex].email = req.body.email || users[userIndex].email
    users[userIndex].password = req.body.password ||users[userIndex].password

    res.send('data changed')
  } else {
    res.send('non registered email')
  }

}

function deleteUser(req, res) {
  var userIndex;

  for (var i = 0; i < users.length; i++) {
    if (users[i].email === req.params.email) {
      userIndex = i
    }
  }

  if(userIndex >= 0) {
    users.splice(userIndex, 1)
    res.send('data deleted')
  } else {
    res.send('User non found')
  }
}

function authUser(req, res) {
  var userIndex;

  for (var i = 0; i < users.length; i++) {
    if (users[i].email === req.body.email
        && users[i].password === req.body.password) {
      userIndex = i
    }
  }

  if(userIndex >= 0) {
    console.log('User Successfuly received');
    res.send(users[userIndex])
  } else {
    res.send('Something wrong =)')
  }
}

var express = require('express')
var cors = require('cors')
var app = express()

var bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

var users = [];

var groupsForTest = [
  { 
    type: 'groupItem',
    department: 'Computer Science', 
    groupName: 'CS-E3SI'
  },
  { 
    type: 'groupItem',
    department: 'Economics', 
    groupName: 'ES-S2PI' 
  },
  { 
    type: 'groupItem',
    department: 'Architecture', 
    groupName: 'AR-S2PI' 
  },
  { 
    type: 'groupItem',
    department: 'Tourism and Recreation', 
    groupName: 'TR-S3EI' 
  },
  { 
    type: 'groupItem',
    department: 'Computer Science', 
    groupName: 'CS-E3SI' 
  },
  { 
    type: 'groupItem',
    department: 'Economics', 
    groupName: 'ES-S2PI' 
  },
  { 
    type: 'groupItem',
    department: 'Architecture', 
    groupName: 'AR-S2PI' 
  },
  { 
    type: 'groupItem',
    department: 'Tourism and Recreation', 
    groupName: 'TR-S3EI' 
  }
]

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

app.get('/', getGroups)
app.get('/my-schedule', getSchedule)

app.get('/:name', getSingleGroup)
app.get('/user', userHandler)
app.get('/user/:name', nameHandler)

app.post('/user', createUser)
app.post('/auth', authUser)

app.put('/user/:email', updateUser)

app.delete('/user/:email', deleteUser)


app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
})


function getGroups(req, res) {
  res.send(groupsForTest)
}

function getSingleGroup(req, res) {
  const unicName = req.params.name
  const group = groupsForTest.find(group => group.groupName === unicName)

  res.send(group)
}

function getSchedule(req, res) {
  res.send(scheduleForTest)
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

    console.log('User successfuly created')
    res.status(201).send()
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
    console.log('User Successfuly authorized');
    res.status(200).send({
      name: users[userIndex].name,
      surname: users[userIndex].surname,
      email: users[userIndex].email,
      department: users[userIndex].department
    })
  } else {
    res.status(200).send({error: 'Something wrong =)'})
  }
}

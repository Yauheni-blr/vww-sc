const Group = require('../models/group.model')

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

module.exports = function(app) {
  app.get('/', getGroups)
  app.get('/my-groups/:name', getSingleGroup)
}

function getGroups(req, res) {
  res.send(groupsForTest)
}

function getSingleGroup(req, res) {
  const unicName = req.params.name
  const group = groupsForTest.find(group => group.groupName === unicName)

  res.send(group)
}
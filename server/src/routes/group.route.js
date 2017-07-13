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

  app.get('/my-groups', getGroups)
  app.get('/my-groups/:name', getSingleGroup)
  
}

function getGroups(req, res) {
  console.log('All groups received successfully')
  res.send(groupsForTest)
}

function getSingleGroup(req, res) {
  const unicName = req.params.name
  const group = groupsForTest.find(group => group.groupName === unicName)

  console.log(`Single group: ${group.name} -> received successfully`)
  res.send(group)
}
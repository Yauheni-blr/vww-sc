const Group = require('../models/group.model')

module.exports = function(app) {

  app.get('/all-groups', getAllGroups)
  app.get('/all-groups/:id', getSingleGroupFromAll)
  app.get('/my-groups/:ids', getAttachedGroups)

  app.post('/all-groups', createGroup)

  app.put('/all-groups/:id', updateGroup)

  //  app.delete('/all-groups/:ids', deleteGroupFromAll)
}

function getAllGroups(req, res) {
  Group.find({}, function(err, payload) {
    console.log('All groups received successfully')
    res.send(payload)
  })
}

function getAttachedGroups(req, res) {
  const arr = req.params.ids.split(',')
  
  Group.find({ _id: {$in: arr} }, function(err, payload) {
    res.status(200).send(payload)
  })
}

function createGroup(req, res) {
  if(req.body) {
    const group = new Group({
      name: req.body.name,
      department: req.body.department,
      attachedStudents: req.body.attachedStudents,
      attachedSubjects: req.body.attachedSubjects,
      startStudyAt: req.body.startStudyAt,
      finishStudyAt: req.body.finishStudyAt,
      schedule: req.body.schedule 
    })

    group.save(err => {
      if (err) {
        res.status(200).send('This Group already exists')
      } else {
        console.log(`Group ${req.body.name} created successfully`)

        res.status(201).send(group)
      }
    })
  }
}


function getSingleGroupFromAll(req, res) {
  Group.findOne({ _id: req.params.id }, function(err, payload) {
    if(payload)
      res.status(200).send(payload)
  })
}

function updateGroup(req, res) {
  Group.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function(err, payload) {
    res.send(payload)
  })
}
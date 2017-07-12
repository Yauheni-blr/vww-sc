const express = require('express') // написания веб серверов
const mongoose = require('mongoose') //помогает общаться с базой данных
const cors = require('cors') //фильтрует забросы клиент-сервер
const helmet = require('helmet') //защита от xss атаки
const bodyParser = require('body-parser') //заберает тело запроса

const config = require('./config')
const initDb = require('./db')

const initUserRoute = require('./routes/user.route')
const initGroupRoute = require('./routes/group.route')
const initScheduleRoute = require('./routes/schedule.route')


// init app
const app = express() // init для express
app.use(cors()) // подключить cors по умолчанию
app.use(helmet()) //подключить hеlmet по умолчанию
app.use(bodyParser.json()) // подключить bodyParser в режиме json

initDb(mongoose, config)


app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
})

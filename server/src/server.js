const express = require('express') // фреймворк для написания веб серверов
const mongoose = require('mongoose') // поможет общаться с базой данных (mongo)
const cors = require('cors') // Cros Origin Recourse Sharing (поможет фильтровать запросы client-server)
const helmet = require('helmet') // Защитит от XSS атак
const bodyParser = require('body-parser') // поможет удобно забирать тело запроса

const config = require('./config') // тут хранится наш конфиг
const initDb = require('./db') // тут мы подключаемся к базе данных

const initUserRoute = require('./routes/user.route') // коробка для всех роутов связаных с User
const initGroupRoute = require('./routes/group.route') // коробка для всех роутов связаных с Group
const initScheduleRoute = require('./routes/schedule.route') // коробка для всех роутов связаных с Schedule

// --------------------

// init app
const app = express() // инициализация express
app.use(cors()) // подключить cors по умолчанию
app.use(helmet()) // подключить helmet по умулчанию
app.use(bodyParser.json()) // подключить bodyParser в режиме json

// DB connection
initDb(mongoose, config) // инициализация базы дааных

// init route
initUserRoute(app) // инициализация роутов связаных с User
initGroupRoute(app) // инициализация роутов связаных с Group
initScheduleRoute(app) // инициализация роутов связаных с Schedule

// launch server
app.listen(3001, function () { // запускаем сервер на 3001 порте
  console.log('Example app listening on port 3001!');
})
const express = require('express') // Фреймворк для написания веб серверов
const mongoose = require('mongoose') // Помощь в общении с базой данных (mongo)
const cors = require('cors') // Cros Origin Resource Sharing (Поможет фильтровать запросы клиент-сервер)
const helmet = require('helmet') // Защита от XSS(скрипты в формах) атак
const bodyParser = require('body-parser') // Поможет удобно забрать тело запроса

const config = require('./config') // Хранится наш конфиг
const initDb = require('./db') // Подключаемся к базе данных

const initUserRoute = require('./routes/user.route')  // Коробка для всех роутов связанных c User'ом
const initGroupRoute = require('./routes/group.route') // Коробка для всех роутов связанных c Group'ами
const initScheduleRoute = require('./routes/schedule.route') //Коробка для всех роутов связанных c Schedule'ом
const initStudentRoute = require('./routes/student.route')  // Коробка для всех роутов связанных c Student'ом

    //-----------------------


// Init App
const app = express() // инициализация(запуск) express
app.use(cors()) // Подключить cors по умолчанию(без config'ов)
app.use(helmet()) // Подключить helmet по умолчанию(без config'ов)
app.use(bodyParser.json()) // Подключить bodyParser в режиме json

// DB connection
initDb(mongoose, config) // инициализация бд

// init route
initUserRoute(app) // Инициализация роутов связанных с User'ом
initGroupRoute(app) // Инициализация роутов связанных с Group'ами
initScheduleRoute(app) // Инициализация роутов связанных с Schedule'ом
initStudentRoute(app) // Инициализация роутов связанных с Student'ом

// Lounch server
app.listen(3001, function () {  // Запускаем сервер на 3001 порте
  console.log('Example app listening on port 3001!');
})



const CLIENT = {
  ORIGIN: 'http://localhost:3000',
  PORT: 3000
}
const SERVER = {
  ORIGIN: 'http://localhost:3001',
  PORT: 3001
}
const DB = {
  ORIGIN: 'mongodb://localhost/VSLA',
  PORT: 27017
}

const CORS_OPTION = {
  client: CLIENT.ORIGIN,
  optionsSuccessStatus: 200
}

module.exports = {
  CLIENT,
  SERVER,
  DB,
  CORS_OPTION,
}

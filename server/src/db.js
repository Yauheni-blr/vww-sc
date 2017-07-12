module.exports = function(mongoose, config) {
  mongoose.Promise = global.Promise;  // ВНИМАНИЕ!!! ХАК, был :(

  mongoose.connect(config.DB.ORIGIN);
  mongoose.connection.on('error', console.error.bind(console, 'connection error:'))
  mongoose.connection.once('open', function() { console.log('DB connected!') })
}
const bcrypt = require('bcrypt')

module.exports = function(value) {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(value, salt, function(err, hash) {
        resolve(hash)
      })
    })
  })
}
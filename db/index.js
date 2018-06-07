const Datastore = require('nedb');
const path = require ('path');
const db = {
  User: new Datastore({
    filename: path.join(__dirname, '../data/users.db'),
    autoload: true
  })
}

module.exports = {
  User: db.User
}

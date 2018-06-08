require('dotenv').config();
const { User } = require('../db');
const router = require('./bootstrap');

router.post('/test', (req, res) => {
  User.insert([{ a: 5 }, { a: 42 }], function (err, newDocs) {
    res.send(newDocs);
  });
})

module.exports = {
  path: '/api',
  handler: router
}

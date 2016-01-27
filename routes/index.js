var models = require('../models');
var express = require('express');
var router = express.Router();
var app = express();

// Main Route
router.get('/', function(req, res) {
  res.send('Home')
});

// Login
router.post('/login', function(req, res) {
  models.User.findAll({
    where: {
      "username": req.body.username,
      "password": req.body.password,
    }
  }).then(function(user) {
    res.send(user)
  })
});

var users = require('./users');
app.use('/users', users);

module.exports = router;

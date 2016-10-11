var models = require('../models');
var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  models.User.findAll({
    include: [ models.UserType ],
    attributes: { exclude: ['password'] }
  }).then(function(user) {
    res.send(user);
  });
})
router.get('/:id', function(req, res) {
  var id = req.params.id;
  models.User.findById(id,{
    include: [ models.UserType ],
    attributes: { exclude: ['password'] }
  }).then(function(user) {
    res.send(user);
  });
})

router.post('/', function(req, res) {
  models.User.create(req.body).then(function(user) {
    res.send(JSON.stringify(user.name + ' Created'));
  });
})
router.put('/:id', function(req, res) {
  var id = req.params.id;
  var new_user = req.body;
  models.User.findById(id).then(function(user) {
    if (user) {
      user.update({
        "first_name": new_user.first_name,
        "last_name": new_user.last_name
      }).then(function() {
        res.send(JSON.stringify(user.name + ' Updated'));
      })
    }

  });
})




module.exports = router;

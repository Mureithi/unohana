var models = require('../models');
var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  models.UserType.findAll().then(function(userType) {
    res.send(userType);
  });
})

router.get('/:id', function(req, res) {
  var id = req.params.id;
  models.UserType.findById(id).then(function(userType) {
    res.send(userType);
  });
})

router.post('/', function(req, res) {
  models.UserType.create(req.body).then(function(userType) {
    res.send(
      {
        success:true,
        message:userType.description+ ' has been created',
        question:userType
      }
    );
  });
})

router.put('/:id', function(req, res) {
  var id = req.params.id;
  var userType = req.body;

  models.UserType.findById(id).then(function(userType) {
    if (userType) {
      userType.update({
        "description": userType.description
      }).then(function() {
        res.send(JSON.stringify(userType.id + ' Updated'));
      })
    }

  });
})

module.exports = router;

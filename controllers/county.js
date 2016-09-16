var models = require('../models');
var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  models.County.findAll().then(function(county) {
    res.send(JSON.stringify(county));
  });
})

router.get('/:id', function(req, res) {
  var id = req.params.id;
  models.County.findById(id).then(function(county) {
    res.send(county);
  });
})

router.post('/', function(req, res) {
  models.County.create(req.body).then(function(county) {
    res.send(
      {
        success:true,
        message:county.description+ ' has been created',
        question:county
      }
    );
  });
})

router.put('/:id', function(req, res) {
  var id = req.params.id;
  var county = req.body;

  models.County.findById(id).then(function(county) {
    if (county) {
      county.update({
        "description": county.description
      }).then(function() {
        res.send(JSON.stringify(county.id + ' Updated'));
      })
    }

  });
})

module.exports = router;

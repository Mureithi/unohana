var models = require('../models');
var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  models.Section.findAll().then(function(section) {
    res.send(section);
  });
})

router.get('/:id', function(req, res) {
  var id = req.params.id;
  models.Section.findById(id).then(function(section) {
    res.send(section);
  });
})

router.post('/', function(req, res) {
  models.Section.create(req.body).then(function(section) {
    res.send(
      {
        success:true,
        message:section.description+ ' has been created',
        question:section
      }
    );
  });
})

router.put('/:id', function(req, res) {
  var id = req.params.id;
  var section = req.body;

  models.Section.findById(id).then(function(section) {
    if (section) {
      section.update({
        "description": section.description
      }).then(function() {
        res.send(JSON.stringify(section.id + ' Updated'));
      })
    }

  });
})

module.exports = router;

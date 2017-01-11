var models = require('../models');
var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  models.OptionType.findAll().then(function(optionType) {
    res.send(optionType);
  });
})

router.get('/:id', function(req, res) {
  var id = req.params.id;
  models.OptionType.findById(id).then(function(optionType) {
    res.send(optionType);
  });
})

router.post('/', function(req, res) {
  models.OptionType.create(req.body).then(function(optionType) {
    res.send(
      {
        success:true,
        message:optionType.description+ ' has been created',
        question:optionType
      }
    );
  });
})

router.put('/:id', function(req, res) {
  var id = req.params.id;
  var optionType = req.body;

  models.OptionType.findById(id).then(function(optionType) {
    if (optionType) {
      optionType.update({
        "description": optionType.description
      }).then(function() {
        res.send(JSON.stringify(optionType.id + ' Updated'));
      })
    }

  });
})

module.exports = router;

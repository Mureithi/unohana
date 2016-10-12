var models = require('../models');
var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  models.Option.findAll({
    include: [ models.OptionType ],
  }).then(function(option) {
    res.send(option);
  });
})
router.get('/:id', function(req, res) {
  var id = req.params.id;
  models.Option.findById(id,{
    include: [ models.OptionType ]
  }).then(function(option) {
    res.send(option);
  });
})
router.post('/', function(req, res) {
  models.Option.create(req.body).then(function(option) {
    res.send(
      {
        success:true,
        message:option.description+ ' has been created',
        question:option
      }
    );
  });
})
router.put('/:id', function(req, res) {
  var id = req.params.id;
  var option = req.body;

  models.Option.findById(id).then(function(option) {
    if (option) {
      option.update({
        "description": option.description,

        "values": option.values,

        "tags": option.tags
      }).then(function() {
        res.send(JSON.stringify(option.id + ' Updated'));
      })
    }

  });
})

module.exports = router;

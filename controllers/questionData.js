var models = require('../models');
var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  models.QuestionData.findAll().then(function(questionData) {
    res.send(questionData);
  });
})

router.get('/:id', function(req, res) {
  var id = req.params.id;
  models.QuestionData.findById(id).then(function(questionData) {
    res.send(questionData);
  });
})

router.post('/', function(req, res) {
  models.QuestionData.create(req.body).then(function(questionData) {
    res.send(
      {
        success:true,
        message:questionData.description+ ' has been created',
        question:questionData
      }
    );
  });
})

router.put('/:id', function(req, res) {
  var id = req.params.id;
  var questionData = req.body;

  models.QuestionData.findById(id).then(function(questionData) {
    if (questionData) {
      questionData.update({
        "description": questionData.description
      }).then(function() {
        res.send(JSON.stringify(questionData.id + ' Updated'));
      })
    }

  });
})

module.exports = router;

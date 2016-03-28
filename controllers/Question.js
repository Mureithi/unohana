var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  models.Question.findAll().then(function(questions) {
    var response = {}
    response.success = {}
    response.success.message = "Found Records"
    response.success.data = questions
    res.json(response)
  })
});
router.post('/', function(req, res) {
  models.Question.create(req.body).then(function(questions) {
    res.json(questions)
  })
});

router.put('/:id', function(req, res) {
  var id = req.params.id;
  var new_question = req.body;
  models.User.findById(id).then(function(question) {
    if (question) {
      question.update({
        "value": new_question.value,
        "tags": new_question.tags
      }).then(function() {
        res.send(JSON.stringify(question.value + ' Updated'));
      })
    }
  });
});

router.delete('/:id', function(req, res) {
  models.Question.findAll().then(function(questions) {
    res.json(questions)
  })
});

router.post('/import', function(req, res) {


  console.log('Importing File')


  models.Question.findAll().then(function(questions) {
    res.json(questions)
  })
});



module.exports = router;

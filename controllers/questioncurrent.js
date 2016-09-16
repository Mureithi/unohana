var models = require('../models');
var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  models.QuestionCurrent.findAll().then(function(questioncurrent) {
    res.send(JSON.stringify(questioncurrent));
  });
})

router.get('/:id', function(req, res) {
  var id = req.params.id;
  models.QuestionCurrent.findById(id).then(function(questioncurrent) {
    res.send(questioncurrent);
  });
})

router.post('/', function(req, res) {
  models.QuestionCurrent.create(req.body).then(function(questioncurrent) {
    res.send(
      {
        success:true,
        message:'Success!',
        question:questioncurrent
      }
    );
  });
})

router.put('/:id', function(req, res) {
  var id = req.params.id;
  var updated_question = req.body;

  models.QuestionCurrent.findById(id).then(function(questioncurrent) {
    if (questioncurrent) {
      questioncurrent.update({
        "description": new_question.description
      }).then(function() {
        res.send(JSON.stringify(updated_question.id + ' Updated'));
      })
    }

  });
})

module.exports = router;

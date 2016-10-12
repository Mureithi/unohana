var models = require('../models');
var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  models.Question.findAll().then(function(question) {
  res.send(question);
  });
})
router.get('/:id', function(req, res) {
  var id = req.params.id;
  models.Question.findById(id).then(function(question) {
    res.send(question);
  });
})

router.post('/', function(req, res) {
  models.Question.create(req.body).then(function(question) {
    res.send(
      {
        success:true,
        message:question.description+ ' has been created',
        question:question
      }
    );
  });
})

router.put('/:id', function(req, res) {
  var id = req.params.id;
  var updated_question = req.body;

  models.Question.findById(id).then(function(question) {
    if (question) {
      question.update({
        "description": new_question.description
      }).then(function() {
        res.send(JSON.stringify(updated_question.id + ' Updated'));
      })
    }

  });
})

function transform_question(question){
  return {
    id : question.id,
    survey :null,
    value : question.value,
    createdAt : question.createdAt,
    updatedAt : question.updatedAt
  }
}
module.exports = router;

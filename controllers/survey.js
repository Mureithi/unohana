var models = require('../models');
var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  models.Survey.findAll().then(function(survey) {
    res.send(JSON.stringify(survey));
  });
})
router.get('/:id', function(req, res) {
  var id = req.params.id;
  models.Survey.findById(id).then(function(survey) {
    res.send(survey);
  });
})

router.post('/', function(req, res) {
  console.log(req.body);
  models.Survey.create(req.body).then(function(survey) {
    res.send(
      {
        success:true,
        message:survey.description + ' Created',
        survey:survey
      }
    );
  });
})
router.put('/:id', function(req, res) {
  var id = req.params.id;
  var new_survey = req.body;

  models.Survey.findById(id).then(function(survey) {
    if (survey) {
      survey.update({
        "description": new_survey.description
      }).then(function() {
        res.send(JSON.stringify(new_survey.description + ' Updated'));
      })
    }

  });
})




module.exports = router;

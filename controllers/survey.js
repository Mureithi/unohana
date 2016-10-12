var models = require('../models');
var express = require('express');
var router = express.Router();

//it is a bit dirty the password is accessible for now
//still working on a solution to this
router.get('/', function(req, res) {
  models.Survey.findAll({
    include: [{model: models.User,attributes: { exclude: ['password'] },include:[{model: models.UserType}]}],
  }).then(function(survey) {
    res.send(survey);
  });
})


router.get('/:id', function(req, res) {
  var id = req.params.id;
  models.Survey.findById(id,{
    include: [{model: models.User,attributes: { exclude: ['password'] },include:[{model: models.UserType}]}],
  }).then(function(survey) {
    res.send(survey);
  });
})

router.post('/', function(req, res) {
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

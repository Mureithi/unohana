var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  models.Section.findAll({
    include: [{
      model: models.Survey,
        include:[{
          model: models.User,attributes: { exclude: ['password'] },
            include:[models.UserType]}]}],

  }).then(function(section) {
    res.send(section);
  });
})

router.get('/:id', function(req, res) {
  var id = req.params.id;
  models.Section.findById(id,{
    include: [{
      model: models.Survey,
        include:[{
          model: models.User,attributes: { exclude: ['password'] },
            include:[models.UserType]}]}],
  }).then(function(section) {
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

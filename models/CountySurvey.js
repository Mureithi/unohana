'use strict';
module.exports = function(sequelize, DataTypes) {
  var CountySurvey = sequelize.define('CountySurvey', {

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        CountySurvey.hasMany(models.QuestionData);
      }
    }
  });
  return CountySurvey;
};
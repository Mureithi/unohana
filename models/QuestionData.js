'use strict';
module.exports = function(sequelize, DataTypes) {
    // Define the Question Data Model
  var QuestionData = sequelize.define('QuestionData', {
    answer: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        QuestionData.belongsTo(models.QuestionCurrent);
        QuestionData.belongsTo(models.User);
        QuestionData.belongsTo(models.CountySurvey);
      }
    },
    underscored: true
  });
  return QuestionData;
};

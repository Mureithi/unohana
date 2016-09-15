'use strict';
module.exports = function(sequelize, DataTypes) {
    // Define the Question Data Model
  var QuestionData = sequelize.define('QuestionData', {
    answer: DataTypes.STRING,
    question_current_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return QuestionData;
};

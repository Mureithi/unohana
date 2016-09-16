'use strict';
module.exports = function(sequelize, DataTypes) {
    // Define the Question Current Model
  var QuestionCurrent = sequelize.define('QuestionCurrent', {
    question_id: DataTypes.INTEGER,
    option_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return QuestionCurrent;
};

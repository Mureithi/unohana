'use strict';
module.exports = function(sequelize, DataTypes) {
    // Define the Question Model
  var Question = sequelize.define('Question', {
    description: DataTypes.STRING,
    tags: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Question.hasMany(models.QuestionCurrent);
      }
    },
    underscored: true
  });
  return Question;
};

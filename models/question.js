'use strict';
module.exports = function(sequelize, DataTypes) {
    // Define the Question Model
  var Question = sequelize.define('Question', {
    description: DataTypes.STRING,
    option_id: DataTypes.INTEGER,
    survey_id: DataTypes.INTEGER,
    tags: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Question;
};
'use strict';
module.exports = function(sequelize, DataTypes) {
    // Define the Question Model
  var Question = sequelize.define('Question', {
    value: DataTypes.STRING,
    survey_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Question;
};

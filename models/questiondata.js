'use strict';
module.exports = function(sequelize, DataTypes) {
  var QuestionData = sequelize.define('QuestionData', {
    answer: DataTypes.STRING,
    qc_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return QuestionData;
};
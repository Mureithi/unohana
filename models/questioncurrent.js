'use strict';
module.exports = function(sequelize, DataTypes) {
  var QuestionCurrent = sequelize.define('QuestionCurrent', {
    q_id: DataTypes.INTEGER,
    o_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return QuestionCurrent;
};
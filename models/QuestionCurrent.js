'use strict';
module.exports = function(sequelize, DataTypes) {
    // Define the Question Current Model
  var QuestionCurrent = sequelize.define('QuestionCurrent', {
    mandatory: DataTypes.BOOLEAN,
    order: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        QuestionCurrent.belongsTo(models.Question);
        QuestionCurrent.belongsTo(models.Section);
        
        QuestionCurrent.hasMany(models.QuestionData);
      },
      underscored: true
    }
  });
  return QuestionCurrent;
};

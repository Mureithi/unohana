'use strict';
module.exports = function(sequelize, DataTypes) {
    // Define the Survey Model
  var Survey = sequelize.define('Survey', {
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Survey;
};

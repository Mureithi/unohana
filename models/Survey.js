'use strict';
module.exports = function(sequelize, DataTypes) {
    // Define the Survey Model
  var Survey = sequelize.define('Survey', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Survey.belongsTo(models.User);
        Survey.hasMany(models.Section);
        Survey.belongsToMany(models.County, { through: models.CountySurvey });
      },
      underscored: true
    }
  });
  return Survey;
};

'use strict';
module.exports = function(sequelize, DataTypes) {
  // Define a County Model
  var County = sequelize.define('County', {
    // Set the Attributes
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        County.belongsToMany(models.Survey, { through: models.CountySurvey });
      },
      underscored: true
    }
  });
  return County;
};

'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserType = sequelize.define('UserType', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        UserType.hasMany(models.User);
      }
    },
    underscored: true
  });
  return UserType;
};
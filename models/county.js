'use strict';
module.exports = function(sequelize, DataTypes) {
  var County = sequelize.define('County', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return County;
};

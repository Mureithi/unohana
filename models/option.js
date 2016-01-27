'use strict';
module.exports = function(sequelize, DataTypes) {
  var Option = sequelize.define('Option', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    value: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Option;
};

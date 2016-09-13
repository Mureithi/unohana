'use strict';
module.exports = function(sequelize, DataTypes) {
  var Options = sequelize.define('Options', {
    q_id: DataTypes.INTEGER,
    value: DataTypes.STRING,
    qc_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Options;
};
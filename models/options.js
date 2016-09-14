'use strict';
module.exports = function(sequelize, DataTypes) {
  // Define the Options Model
  var Options = sequelize.define('Options', {
    // Set the Attributes
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

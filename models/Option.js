'use strict';
module.exports = function(sequelize, DataTypes) {
  // Define the Options Model
  var Option = sequelize.define('Option', {
    // Set the Attributes
    description: DataTypes.STRING,
    values: DataTypes.STRING,
    tags: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Option.belongsTo(models.OptionType);
        Option.hasMany(models.Question);
      },
      underscored: true
    }
  });
  return Option;
};

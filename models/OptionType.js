'use strict';
module.exports = function(sequelize, DataTypes) {
  var OptionType = sequelize.define('OptionType', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        OptionType.hasMany(models.Option);
      }
    },
    underscored: true
  });
  return OptionType;
};

"use strict";

module.exports = function(sequelize, DataTypes) {
    // Define the User Model
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.VIRTUAL,
      get: function() {
        var last_name = this.getDataValue('last_name');
        return this.getDataValue('first_name') + ' ' + last_name
      }
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
    
  }, {
    classMethods: {
      associate: function(models) {
        User.belongsTo(models.UserType);
        User.hasMany(models.QuestionData);
        User.hasMany(models.Survey);
      }
    },
      underscored: true
  });

  return User;
};

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
    // password_hash: DataTypes.STRING,
    // password: {
    //   type: DataTypes.VIRTUAL,
    //   set: function(val) {
    //     this.setDataValue('password', val); // Remember to set the data value, otherwise it won't be validated
    //     this.setDataValue('password_hash', this.salt + val);
    //   },
    //   validate: {
    //     isLongEnough: function(val) {
    //       if (val.length < 7) {
    //         throw new Error("Please choose a longer password")
    //       }
    //     }
    //   }
    // }
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Task)
      }
    }
  });

  return User;
};

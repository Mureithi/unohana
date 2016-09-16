"use strict";

module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Task.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Task;
};

//sequelize model:create --name Survey --attributes description:string
//sequelize model:create --name Survey --attributes description:string

//sequelize model:create --name Option --attributes type:string
//sequelize model:create --name Question --attributes description:string,option_id:integer,survey_id:integer,tags:string
//sequelize model:create --name QuestionCurrent --attributes question_id:integer,option_id:integer
//sequelize model:create --name QuestionData --attributes answer:string,question_current_id:integer

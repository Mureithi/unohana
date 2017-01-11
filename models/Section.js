'use strict';
module.exports = function(sequelize, DataTypes) {
  //define the Sections Model
  var Section = sequelize.define('Section', {
    name: DataTypes.STRING,
    order: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Section.belongsTo(models.Survey,{foreignKey: 'survey_id'});
        // Section.belongsTo(models.Survey);
      }
    },
    underscored: true
  });
  return Section;
};

'use strict';
module.exports = function(sequelize, DataTypes) {
  var Section = sequelize.define('Section', {
    name: DataTypes.STRING,
    order: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Section.belongsTo(models.Survey,{foreignKey: 'survey_id'});
      }
    },
    underscored: true
  });
  return Section;
};

'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'QuestionData',
      'county_survey_id',
      {
        type: Sequelize.INTEGER,
        references: {
          model: "CountySurveys",
          key: "id",
          onUpdate: "CASCADE",
          onDelete: "RESTRICT"
        },
        allowNull: false
      }
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('QuestionData', 'county_survey_id');
  }
};

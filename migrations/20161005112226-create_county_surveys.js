'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('CountySurveys', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      county_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Counties",
          key: "id",
          onUpdate: "CASCADE",
          onDelete: "RESTRICT"
        },
        allowNull: false
      },
      survey_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Surveys",
          key: "id",
          onUpdate: "CASCADE",
          onDelete: "RESTRICT"
        },
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('CountySurveys');
  }
};

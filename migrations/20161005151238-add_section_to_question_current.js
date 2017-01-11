'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'QuestionCurrents',
      'section_id',
      {
        type: Sequelize.INTEGER,
        references: {
          model: "Sections",
          key: "id",
          onUpdate: "CASCADE",
          onDelete: "RESTRICT"
        },
        allowNull: false
      }
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('QuestionCurrents', 'section_id');
  }
};

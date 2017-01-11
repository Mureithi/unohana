'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Options',
      'option_type_id',
      {
        type: Sequelize.INTEGER,
        references: {
          model: "OptionTypes",
          key: "id",
          onUpdate: "CASCADE",
          onDelete: "RESTRICT"
        },
        allowNull: false
      }
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Options', 'option_type_id');
  }
};

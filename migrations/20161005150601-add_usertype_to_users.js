'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Users',
      'user_type_id',
      {
        type: Sequelize.INTEGER,
        references: {
          model: "UserTypes",
          key: "id",
          onUpdate: "CASCADE",
          onDelete: "RESTRICT",
        },
        allowNull: false
      }
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Users', 'user_type_id');
  }
};

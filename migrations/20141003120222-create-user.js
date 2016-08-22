"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface
      .createTable('Users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        first_name: Sequelize.STRING,
        last_name: Sequelize.STRING,
        username: Sequelize.STRING,
        password: Sequelize.STRING,
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        },
      });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface
      .dropTable('Users');
  }
};

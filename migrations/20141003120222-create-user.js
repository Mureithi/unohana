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
        username: {
          type: Sequelize.STRING,
          unique: true
        },
        password: Sequelize.STRING,
        created_at: {
          type: Sequelize.DATE
        },
        updated_at: {
          type: Sequelize.DATE
        },
      });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface
      .dropTable('Users');
  }
};

'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('UserTypes', [
    {
      id : 1,
      name: 'Super-Administrator',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 2,
      name: 'Administrator',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 3,
      name: 'Ordinary User',
      created_at: new Date(),
      updated_at: new Date()
    }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('UserTypes', null, {});
  }
};

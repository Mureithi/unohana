'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('OptionTypes', [
    {
      id : 1,
      name: 'Open-ended',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 2,
      name: 'Select-one',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 3,
      name: 'Select-many',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 4,
      name: 'Radio',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 5,
      name: 'Date-picker',
      created_at: new Date(),
      updated_at: new Date()
    }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('OptionTypes', null, {});
  }
};

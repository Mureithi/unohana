'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Surveys', [
    {
      name: 'Curing Premises',
      user_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Footwear and Leather Companies',
      user_id: 3,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Livestock Distribution',
      user_id: 3,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Manufacturing',
      user_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Slaughter Houses',
      user_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Tanneries',
      user_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Training Institutions',
      user_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },

    ], {});
  },

  down: function (queryInterface, Sequelize) {
  return queryInterface.bulkDelete('Surveys', null, {});
  }
};

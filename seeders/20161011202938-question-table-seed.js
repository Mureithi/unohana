'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Questions', [
    {
      description: 'What is the name of your County?',
      tags: 'footwear, leather',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      description: 'What is the nature of business?',
      tags: 'footwear, leather',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      description: 'Give the type of business',
      tags: 'footwear, leather',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      description: 'Give the business category',
      tags: 'footwear, leather',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      description: 'How old is the business?',
      tags: 'footwear, leather',
      created_at: new Date(),
      updated_at: new Date()
    },

    ], {});

  },

  down: function (queryInterface, Sequelize) {
  return queryInterface.bulkDelete('Questions', null, {});
  }
};

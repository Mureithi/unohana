'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
  return queryInterface.bulkInsert('Sections', [
    {
        name: 'Section 1',
        survey_id: 1,
        created_at:new Date() ,
        updated_at:new Date()

    },
    {
        name: 'Section 2',
        survey_id: 2,
        created_at:new Date() ,
        updated_at:new Date()

    },
    {
        name: 'Section 3',
        survey_id: 3,
        created_at: new Date(),
        updated_at:new Date()

    },
    ], {});

  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Sections', null, {});
  }
};

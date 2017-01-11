'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('CountySurveys', [
    {
      county_id: 1,
      survey_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      county_id: 2,
      survey_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      county_id: 3,
      survey_id: 3,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      county_id: 4,
      survey_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      county_id: 5,
      survey_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      county_id: 6,
      survey_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      county_id: 7,
      survey_id: 7,
      created_at: new Date(),
      updated_at: new Date()
    },
    ], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('CountySurveys', null, {});

  }
};

'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('QuestionData', [
      {
        answer: 'Nairobi',
        question_current_id: 1,
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
        county_survey_id:1
      },
      {
        answer: 'Leather Company',
        question_current_id: 2,
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
        county_survey_id:2
      },
      {
        answer: 'Limited Company',
        question_current_id: 3,
        user_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
        county_survey_id:3
      },
      

    ], {});

  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('QuestionData', null, {});

  }
};

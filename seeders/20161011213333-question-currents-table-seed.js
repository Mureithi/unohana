'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('QuestionCurrents', [
    {
        mandatory: 1,
        question_id: 1,
        option_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
        section_id:1
    },
    {
        mandatory: 1,
        question_id: 2,
        option_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
        section_id:2
    },
    {
        mandatory: 1,
        question_id: 3,
        option_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
        section_id:3
    },


    ], {});

  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('QuestionCurrents', null, {});

  }
};

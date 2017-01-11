'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Options', [
      {
        description: 'County Name',
        values: 'Nairobi, Mombasa, Kiambu',
        tags: 'leather, footwear',
        created_at: new Date(),
        updated_at: new Date(),
        option_type_id: 1

      },
      {
        description: 'Nature of business',
        values: 'Leather Company, Footwear',
        tags: 'leather, footwear, business',
        created_at: new Date(),
        updated_at: new Date(),
        option_type_id: 2

      },
      {
        description: 'Type of company',
        values: 'Limited Company, Sole Proprietor, Partnership',
        tags: 'leather, footwear',
        created_at: new Date(),
        updated_at: new Date(),
        option_type_id: 2

      },
      {
        description: 'Business Category',
        values: 'Micro, Small-medium, Medium, Large',
        tags: 'leather, footwear',
        created_at: new Date(),
        updated_at: new Date(),
        option_type_id: 2

      },
      {
        description: 'Business Age',
        values: '0 - 2 years, 3 - 6 years, 6 - 9 years, 10 years and above',
        tags: 'leather, footwear',
        created_at: new Date(),
        updated_at: new Date(),
        option_type_id: 2

      },
    ], {});

  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Options', null, {});

  }
};

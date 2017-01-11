'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
    {
      first_name: 'Rufus',
      last_name: 'Mbugua',
      username: 'rufusmbugua',
      password: '123456',
      user_type_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Joel',
      last_name: 'Kithinji',
      username: 'joelkithinji',
      password: '123456',
      user_type_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Collins',
      last_name: 'Ojenge',
      username: 'collinsojenge',
      password: '123456',
      user_type_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Kelvin',
      last_name: 'Mureithi',
      username: 'kelvinmureithi',
      password: '123456',
      user_type_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },

    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('UserTypes', null, {});
  }
};

'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Counties', [
    {
      id : 1,
      name: 'Nairobi',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 2,
      name: 'Mombasa',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 3,
      name: 'Kwale',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 4,
      name: 'Kilifi',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 5,
      name: 'Tana River',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 6,
      name: 'Lamu',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 7,
      name: 'Taita Taveta',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 8,
      name: 'Garissa',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 9,
      name: 'Wajir',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 10,
      name: 'Mandera',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 11,
      name: 'Marsabit',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 12,
      name: 'Isiolo',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 13,
      name: 'Meru',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 14,
      name: 'Tharaka Nithi',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 15,
      name: 'Embu',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 16,
      name: 'Kitui',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 17,
      name: 'Machakos',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 18,
      name: 'Makueni',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 19,
      name: 'Nyandarua',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 20,
      name: 'Nyeri',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 21,
      name: 'Kirinyaga',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 22,
      name: 'Muranga',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 23,
      name: 'Kiambu',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 24,
      name: 'Turkana',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 25,
      name: 'West Pokot',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 26,
      name: 'Samburu',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 27,
      name: 'Trans Nzoia',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 28,
      name: 'Uasin Gishu',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 29,
      name: 'Elgeoyo Marakwet',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 30,
      name: 'Nandi',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 31,
      name: 'Baringo',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 32,
      name: 'Laikipia',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 33,
      name: 'Nakuru',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 34,
      name: 'Narok',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 35,
      name: 'Kajiado',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 36,
      name: 'Kericho',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 37,
      name: 'Bomet',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 38,
      name: 'Kakamega',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 39,
      name: 'Vihiga',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 40,
      name: 'Bungoma',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 41,
      name: 'Busia',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 42,
      name: 'Siaya',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 43,
      name: 'Kisumu',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 44,
      name: 'Homa Bay',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 45,
      name: 'Migori',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 46,
      name: 'Kisii',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id : 47,
      name: 'Nyamira',
      created_at: new Date(),
      updated_at: new Date()
    },
    
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Counties', null, {});
  }
};

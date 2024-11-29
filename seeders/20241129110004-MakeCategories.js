'use strict';

const tableName = 'Categories'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert(tableName, [
    {
      name: 'Керамогранит и плитка',
      url: '/keramogranit-i-plitka',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Напольные покрытия',
      url: '/napolnye-pokrytia',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Технический и декоративный свет',
      url: '/tehnicheski-i-dekorativny-svet',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Обои и фрески',
      url: '/oboi-i-freski',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Лепнина',
      url: '/lepnina',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Розетки и выключатели',
      url: '/rozetki-i-vykluchateli',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Сантехника',
      url: '/santehnika',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Алюминиевые профиля',
      url: '/alyminievye-profilya',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(tableName, null, {});
  }
};

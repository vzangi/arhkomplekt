'use strict';

const tableName = 'BlogCategories'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert(tableName, [
    {
      name: 'Новости',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Отзывы клиентов',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Мероприятия',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Статьи',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(tableName, null, {});
  }
};

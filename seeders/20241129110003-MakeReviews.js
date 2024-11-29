'use strict';

const tableName = 'Reviews'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(tableName, [
      {
        title: 'Бизнес завтрак',
        prevu: 'с презентацией новинок брендов Donel и Bticino',
        description: 'В нашем шоуруме прошла презентация новинок брендов Donel и Bticino',
        prevuImage: '/uploads/blog/biznes_lanch_1.png',
        link: 'biznes-zavtrak-donel-bticino',
        video: '/uploads/biznes_lanch_2_donel.mp4',
        date: '15.10.2024',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Бизнес завтрак',
        prevu: 'с презентацией новинок бренда Maytony',
        description: 'В нашем шоуруме прошла презентация новинок бренда Maytony',
        prevuImage: '/uploads/blog/biznes_lanch_2.png',
        link: 'biznes-zavtrak-maytony',
        video: '/uploads/biznes_lanch_1_maytony.mp4',
        date: '20.10.2024',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(tableName, null, {});
  }
};

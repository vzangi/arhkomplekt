'use strict';

const tableName = 'Seos'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(tableName, [
      {
        page: "/",
        title: "Архкомплект",
        description: "Салон отделочных материалов с персональным менеджером без переплат",
        keywords: "архкомплект,дизайн,салон",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        page: "/contacts",
        title: "Архкомплект | Контакты",
        description: "Свяжитесь с вашим персональным менеджером по дизайну",
        keywords: "архкомплект,дизайн,контакты",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        page: "/blog",
        title: "Архкомплект | Блог",
        description: "Последние новости, статьи, актуальные мероприятия и многое другое в блоге салона архкомплект",
        keywords: "архкомплект,дизайн,блог",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        page: "/about",
        title: "Архкомплект | О нас",
        description: "Информация о салоне отделочных материалов с персональным менеджером без переплат",
        keywords: "архкомплект,дизайн",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        page: "/delivery",
        title: "Архкомплект | Доставка и оплата",
        description: "Информация о доставке из салона отделочных материалов с персональным менеджером без переплат",
        keywords: "архкомплект,доставка,оплата",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        page: "/portfolio",
        title: "Архкомплект | Портфолио",
        description: "Здесь вы можете посмотреть на проекты, укомплектованные благодаря нашему салону",
        keywords: "архкомплект,портфолио",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        page: "/reviews",
        title: "Архкомплект | Отзывы",
        description: "Узнайте что говорят о нашем салоне клиенты",
        keywords: "архкомплект,портфолио",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(tableName, null, {});
  }
};

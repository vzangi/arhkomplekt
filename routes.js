const express = require('express');
const router = express.Router();
const pageController = require('./controllers/PageController');

// Установка переменных для всех шаблонов
router.use(pageController.setupMiddleware);

// Главная страница
router.get('/', pageController.mainPage);

// Блог
router.get('/blog', pageController.blogPage);

// Запись блога
router.get('/blog/:link', pageController.blogItem);

// Контакты
router.get('/contacts', pageController.contactsPage);

// О нас
router.get('/about', pageController.aboutPage);

// Страница категории
router.get('/:category', pageController.categoryItem);

module.exports = router
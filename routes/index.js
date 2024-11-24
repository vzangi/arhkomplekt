const express = require('express');
const router = express.Router();
const pageController = require('../controllers/PageController');
const blogController = require('../controllers/BlogController');
const portfolioController = require('../controllers/PortfolioController');
const reviewController = require('../controllers/ReviewController');
const notFoundController = require('../controllers/NotFoundController');

// Установка переменных для всех шаблонов
router.use(pageController.setupMiddleware);

// Главная страница
router.get('/', pageController.mainPage);

// Блог
router.get('/blog', blogController.blogPage);

// Запись блога
router.get('/blog/:link', blogController.blogItem);

// Портфолио
router.get('/portfolio', portfolioController.portfolioPage);

// Запись в портфолио
router.get('/portfolio/:link', portfolioController.portfolioItem);

// Отзывы
router.get('/reviews', reviewController.reviewPage);

// Отзыв
router.get('/reviews/:link', reviewController.reviewItem);

// Контакты
router.get('/contacts', pageController.contactsPage);

// Доставка
router.get('/delivery', pageController.deliveryPage);

// О нас
router.get('/about', pageController.aboutPage);

// Страница категории
router.get('/:category', pageController.categoryItem);

router.get('*', notFoundController.notFound);

module.exports = router
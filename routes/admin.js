const express = require('express');
const router = express.Router();
const authController = require('../controllers/admin/AuthController');
const settingsController = require('../controllers/admin/SettingsController');
const seoController = require('../controllers/admin/SeoController');
const uploadController = require('../controllers/admin/UploadController');
const blogController = require('../controllers/admin/BlogController');
const blogItemController = require('../controllers/admin/BlogItemController');
const dirController = require('../controllers/admin/DirController');
const portfolioController = require('../controllers/admin/PortfolioController');
const reviewsController = require('../controllers/admin/ReviewsController');
const categoryController = require('../controllers/admin/CategoryController');
const itemController = require('../controllers/admin/ItemController');

router.get('/', authController.isAuth, authController.index);

// Настройки
router.get('/settings', authController.isAuth, settingsController.index);
router.post('/settings/add', authController.isAuth, settingsController.add);
router.post('/settings/edit', authController.isAuth, settingsController.edit);

// SEO
router.get('/seo', authController.isAuth, seoController.index);
router.post('/seo/add', authController.isAuth, authController.isAdmin, seoController.add);
router.post('/seo/edit', authController.isAuth, seoController.edit);
router.post('/seo/remove', authController.isAuth, authController.isAdmin, seoController.remove);

// Загрузки
router.get('/uploads*', authController.isAuth, uploadController.index);
router.post('/folder/add', authController.isAuth, uploadController.makeDir);
router.post('/folder/remove', authController.isAuth, uploadController.removeDir);
router.post('/file/add', authController.isAuth, uploadController.uploadFile);
router.post('/file/remove', authController.isAuth, uploadController.removeFile);

// Категории блога
router.get('/blog', authController.isAuth, blogController.index);
router.post('/blog/add', authController.isAuth, blogController.add);
router.post('/blog/edit', authController.isAuth, blogController.edit);
router.post('/blog/remove', authController.isAuth, authController.isAdmin, blogController.remove);

// Записи блога
router.get('/blog/:id', authController.isAuth, blogItemController.index);
router.post('/blogitem/add', authController.isAuth, blogItemController.add);
router.post('/blogitem/edit', authController.isAuth, blogItemController.edit);
router.post('/blogitem/remove', authController.isAuth, authController.isAdmin, blogItemController.remove);

router.get('/portfolio', authController.isAuth, portfolioController.index);
router.post('/portfolio/add', authController.isAuth, portfolioController.add);
router.post('/portfolio/edit', authController.isAuth, portfolioController.edit);
router.post('/portfolio/remove', authController.isAuth, authController.isAdmin, portfolioController.remove);

router.get('/reviews', authController.isAuth, reviewsController.index);
router.post('/reviews/add', authController.isAuth, reviewsController.add);
router.post('/reviews/edit', authController.isAuth, reviewsController.edit);
router.post('/reviews/remove', authController.isAuth, authController.isAdmin, reviewsController.remove);

router.get('/categories', authController.isAuth, categoryController.index);
router.post('/categories/add', authController.isAuth, categoryController.add);
router.post('/categories/edit', authController.isAuth, categoryController.edit);
router.post('/categories/remove', authController.isAuth, authController.isAdmin, categoryController.remove);

router.get('/categories/:id', authController.isAuth, itemController.index);
router.post('/item/add', authController.isAuth, itemController.add);
router.post('/item/edit', authController.isAuth, itemController.edit);
router.post('/item/remove', authController.isAuth, authController.isAdmin, itemController.remove);

// Ajax-DIR
router.get('/dir*', authController.isAuth, dirController.dir);

router.get('/logout', authController.logout);
router.post('/', authController.login);

module.exports = router
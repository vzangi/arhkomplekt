const express = require('express');
const router = express.Router();
const authController = require('../controllers/admin/AuthController');
const settingsController = require('../controllers/admin/SettingsController');
const seoController = require('../controllers/admin/SeoController');
const uploadController = require('../controllers/admin/UploadController');

router.get('/', authController.isAuth, authController.index);

// Настройки
router.get('/settings', authController.isAuth, settingsController.index);
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

router.get('/logout', authController.logout);
router.post('/', authController.login);

module.exports = router
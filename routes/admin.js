const express = require('express');
const router = express.Router();
const adminController = require('../controllers/AdminController');

router.get('/', adminController.isAuth, adminController.index);
router.get('/logout', adminController.logout);

// Login
router.post('/', adminController.login);

module.exports = router
const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup); // Rota para registrar um novo usuário
router.post('/login', authController.login);   // Rota para realizar o login

module.exports = router;

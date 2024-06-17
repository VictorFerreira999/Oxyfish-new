// routes/authRoutes.js
const express = require('express');
const router = express.Router();

router.post('/signup', (req, res) => {
    // Lógica para signup
    res.send('Usuário registrado');
});

router.post('/login', (req, res) => {
    // Lógica para login
    res.send('Usuário logado');
});

module.exports = router;

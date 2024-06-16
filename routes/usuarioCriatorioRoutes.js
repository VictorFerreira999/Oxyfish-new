// routes/usuarioCriatorioRoutes.js

const express = require('express');
const router = express.Router();
const usuarioCriatorioController = require('../controllers/usuarioCriatorioController');

router.get('/', usuarioCriatorioController.getAllUsuariosCriatorio);
router.get('/:id', usuarioCriatorioController.getUsuarioCriatorioById);
router.post('/', usuarioCriatorioController.addUsuarioCriatorio);
router.put('/:id', usuarioCriatorioController.updateUsuarioCriatorio);
router.delete('/:id', usuarioCriatorioController.deleteUsuarioCriatorio);

module.exports = router;

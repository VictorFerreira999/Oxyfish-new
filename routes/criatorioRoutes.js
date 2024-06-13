const express = require('express');
const router = express.Router();
const criatorioController = require('../controllers/criatorioController');
const isAuth = require('../middleware/isAuth');

router.get('/', criatorioController.getAllCriatorios);
router.get('/:id', criatorioController.getCriatorioById);
router.post('/', criatorioController.addCriatorio);
router.put('/:id', criatorioController.updateCriatorio);
router.delete('/:id', criatorioController.deleteCriatorio);

module.exports = router;

const express = require('express');
const router = express.Router();
const temperaturaController = require('../controllers/temperaturaController');

router.get('/', temperaturaController.getAllTemperaturas);
router.get('/:id', temperaturaController.getTemperaturaById);
router.post('/', temperaturaController.addTemperatura);
router.put('/:id', temperaturaController.updateTemperatura);
router.delete('/:id', temperaturaController.deleteTemperatura);

module.exports = router;

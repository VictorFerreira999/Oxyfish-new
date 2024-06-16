const express = require('express');
const router = express.Router();
const arduinoController = require('../controllers/arduinoController');

router.get('/', arduinoController.getAllArduinos);
router.get('/:id', arduinoController.getArduinoById);
router.post('/', arduinoController.addArduino);
router.put('/:id', arduinoController.updateArduino);
router.delete('/:id', arduinoController.deleteArduino);

module.exports = router;

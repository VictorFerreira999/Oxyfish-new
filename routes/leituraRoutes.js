const express = require('express');
const router = express.Router();
const leituraController = require('../controllers/leituraController');

router.get('/', leituraController.getAllLeituras);
router.get('/:id', leituraController.getLeituraById);
router.post('/', leituraController.addLeitura);
router.put('/:id', leituraController.updateLeitura);
router.delete('/:id', leituraController.deleteLeitura);

module.exports = router;

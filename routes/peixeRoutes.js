const express = require('express');
const router = express.Router();
const peixeController = require('../controllers/peixeController');

router.get('/', peixeController.getAllPeixes);
router.get('/:id', peixeController.getPeixeById);
router.post('/', peixeController.addPeixe);
router.put('/:id', peixeController.updatePeixe);
router.delete('/:id', peixeController.deletePeixe);

module.exports = router;

const express = require('express');
const router = express.Router();
const phController = require('../controllers/phController');

router.get('/', phController.getAllPhs);
router.get('/:id', phController.getPhById);
router.post('/', phController.addPh);
router.put('/:id', phController.updatePh);
router.delete('/:id', phController.deletePh);

module.exports = router;

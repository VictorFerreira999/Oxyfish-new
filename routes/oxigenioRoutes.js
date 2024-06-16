const express = require('express');
const router = express.Router();
const oxigenioController = require('../controllers/oxigenioController');

router.get('/', oxigenioController.getAllOxigenios);
router.get('/:id', oxigenioController.getOxigenioById);
router.post('/', oxigenioController.addOxigenio);
router.put('/:id', oxigenioController.updateOxigenio);
router.delete('/:id', oxigenioController.deleteOxigenio);

module.exports = router;

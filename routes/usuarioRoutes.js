const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const isAuth = require('../middleware/isAuth');

router.get('/', usuarioController.getAllUsuarios);
router.get('/:id', usuarioController.getUsuarioById);
router.post('/', usuarioController.addUsuario);
router.put('/', usuarioController.updateUsuario);
router.delete('/:id', usuarioController.deleteUsuario);

module.exports = router;

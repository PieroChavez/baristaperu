const express = require('express');
const verificarToken = require('../middleware/auth');

const router = express.Router();

router.get('/perfil', verificarToken, (req, res) => {
  res.json({ mensaje: 'Acceso autorizado', datos: req.usuario });
});

module.exports = router;
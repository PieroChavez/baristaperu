// routes/profileRoutes.js
const express = require('express');
const router = express.Router();
const verificarToken = require('../middleware/auth');

router.get('/perfil', verificarToken, (req, res) => {
  res.json({ mensaje: 'Acceso autorizado', datos: req.usuario });
});

module.exports = router;

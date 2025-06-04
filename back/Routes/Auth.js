// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const connection = require('../DataBase/db'); // tu conexión a MySQL
const bcrypt = require('bcrypt');

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  connection.query('SELECT * FROM usuarios WHERE correo = ?', [email], (err, results) => {
    if (err) return res.status(500).json({ message: 'Error del servidor' });
    if (results.length === 0) return res.status(401).json({ message: 'Correo no encontrado' });

    const user = results[0];

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).json({ message: 'Error al verificar la contraseña' });
      if (!isMatch) return res.status(401).json({ message: 'Contraseña incorrecta' });

      res.json({ message: 'Login exitoso', user });
    });
  });
});

module.exports = router;

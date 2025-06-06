const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../DataBase/db'); // Asegúrate de que la ruta sea correcta

const router = express.Router();

// Registro
router.post('/registro', async (req, res) => {
  const { nombre, sexo, telefono, email, password, rol } = req.body;
  if (!nombre || !sexo || !telefono || !email || !password || !rol) {
    return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
  }

  db.query('SELECT * FROM usuarios WHERE email = ?', [email], async (err, resultados) => {
    if (err) return res.status(500).json({ mensaje: 'Error en la base de datos', error: err });
    if (resultados.length > 0) {
      return res.status(400).json({ mensaje: 'El usuario ya existe' });
    }
    const hash = await bcrypt.hash(password, 10);
    const sql = 'INSERT INTO usuarios (nombre, sexo, telefono, email, password, rol) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [nombre, sexo, telefono, email, hash, rol], (err, result) => {
      if (err) return res.status(500).json({ mensaje: 'Error al registrar usuario', error: err });
      res.status(201).json({ mensaje: 'Usuario registrado correctamente' });
    });
  });
});

// Login
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.query('SELECT * FROM usuarios WHERE email = ?', [email], async (err, resultados) => {
    if (err) return res.status(500).json({ mensaje: 'Error al buscar usuario', error: err });
    if (resultados.length === 0) {
      return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
    }
    const usuario = resultados[0];
    const valida = await bcrypt.compare(password, usuario.password);
    if (!valida) {
      return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
    }
    const token = jwt.sign(
      { id: usuario.id, email: usuario.email, rol: usuario.rol },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );
    res.json({
      mensaje: 'Login exitoso',
      token,
      usuario: {
        nombre: usuario.nombre,
        rol: usuario.rol,
        sexo: usuario.sexo,
        imagen: usuario.imagen || '',
      },
    });
  });
});

module.exports = router;
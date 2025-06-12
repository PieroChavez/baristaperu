const db = require('../database/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Registro de usuario
exports.registrar = async (req, res) => {
  const { nombre, sexo, celular, correo, password, rol } = req.body;

  if (!nombre || !sexo || !celular || !correo || !password || !rol) {
    return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
  }

  db.query('SELECT * FROM usuarios WHERE correo = ?', [correo], async (err, resultados) => {
    if (err) return res.status(500).json({ mensaje: 'Error en la base de datos', error: err });

    if (resultados.length > 0) {
      return res.status(400).json({ mensaje: 'El usuario ya existe' });
    }

    try {
      const hash = await bcrypt.hash(password, 10);
      const sql = 'INSERT INTO usuarios (nombre, celular, rol, correo, sexo, password) VALUES (?, ?, ?, ?, ?, ?)';
      db.query(sql, [nombre, celular, rol, correo, sexo, hash], (err, result) => {
        if (err) return res.status(500).json({ mensaje: 'Error al registrar usuario', error: err });
        res.status(201).json({ mensaje: 'Usuario registrado correctamente' });
      });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al procesar la contraseña', error });
    }
  });
};

// Login de usuario
exports.login = (req, res) => {
  const { correo, password } = req.body;

  if (!correo || !password) {
    return res.status(400).json({ mensaje: 'Correo y contraseña son obligatorios' });
  }

  db.query('SELECT * FROM usuarios WHERE correo = ?', [correo], async (err, resultados) => {
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
      { id: usuario.id, correo: usuario.correo, rol: usuario.rol },
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
        celular: usuario.celular,
        correo: usuario.correo,
        imagen: usuario.imagen || '', // Asegúrate de que 'imagen' exista o agrégalo si lo usarás después
      },
    });
  });
};

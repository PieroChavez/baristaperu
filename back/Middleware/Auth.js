// middleware/auth.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

const verificarToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ mensaje: 'Token requerido' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ mensaje: 'Token inválido' });
    req.usuario = decoded;
    next();
  });
};

module.exports = verificarToken;

// index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
require('./database/db');

// Rutas
app.use('/', require('./routes/authRoutes'));
app.use('/', require('./routes/profileRoutes'));

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Servidor funcionando con MySQL y rutas organizadas');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor corriendo en http://0.0.0.0:${PORT}`);
});

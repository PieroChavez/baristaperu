const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a la base de datos (solo para inicializar)
require('./DataBase/db'); // Asegúrate de que la ruta sea correcta

// Rutas
app.use('/', require('./routes/auth'));
app.use('/', require('./routes/profile'));

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Servidor funcionando con rutas separadas');
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
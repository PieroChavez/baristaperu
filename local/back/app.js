// app.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Ruta raíz
app.get('/', (req, res) => {
  res.send('¡Bienvenido al backend de Baristas!');
});

// Rutas de la API
app.use('/api', userRoutes);

// Manejo de rutas no definidas
app.use((req, res) => {
  res.status(404).send('Ruta no encontrada');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
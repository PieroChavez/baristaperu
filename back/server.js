const connection = require('./DataBase/db');
const express = require('express');

const app = express();

app.get('/api', (req, res) => {
  connection.query('SELECT NOW() as ahora', (err, results) => {
    if (err) return res.status(500).send('Error en BD');
    res.json({ fecha: results[0].ahora });
  });
});





app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});
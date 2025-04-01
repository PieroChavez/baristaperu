// db.js
const sql = require('mssql');
require('dotenv').config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true,
    trustServerCertificate: true,
    connectTimeout: 60000, // Aumenta el tiempo de espera a 60 segundos
    requestTimeout: 60000, // Aumenta el tiempo de espera para las consultas
  },
};

async function connect() {
  try {
    await sql.connect(config);
    console.log('Conexión a SQL Server establecida');
  } catch (err) {
    console.error('Error al conectar a SQL Server:', err);
    throw err;
  }
}

async function close() {
  try {
    await sql.close();
    console.log('Conexión a SQL Server cerrada');
  } catch (err) {
    console.error('Error al cerrar la conexión:', err);
  }
}

module.exports = { connect, close, sql };
// backend/config/db.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME, // Nombre de la base de datos
  process.env.DB_USER, // Usuario de SQL Server
  process.env.DB_PASSWORD, // Contraseña de SQL Server
  {
    host: process.env.DB_HOST, // Host de SQL Server
    port: process.env.DB_PORT, // Puerto de SQL Server
    dialect: 'mssql', // Usamos el dialecto de SQL Server
    dialectOptions: {
      options: {
        encrypt: true, // Para conexiones seguras
      },
    },
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a SQL Server establecida correctamente.');
  } catch (error) {
    console.error('Error conectando a SQL Server:', error.message);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };  
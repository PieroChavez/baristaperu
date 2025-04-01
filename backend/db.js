require("dotenv").config();
const sql = require("mssql");

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_PORT) || 1433,
  options: {
    encrypt: false, // Cambia a true si usas Azure
    trustServerCertificate: true,
  },
};

async function connectDB() {
  try {
    let pool = await sql.connect(dbConfig);
    console.log("Conectado a SQL Server");
    return pool;
  } catch (err) {
    console.error("Error de conexión:", err);
  }
}

module.exports = { connectDB, sql };

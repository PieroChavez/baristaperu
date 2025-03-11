const sql = require("mssql");

const dbConfig = {
  user: "root",
  password: "",

  server: "PIERO-CHAVEZ\SQLEXPRESS", // Cambia según tu configuración
  database: "Baristas",
  
  options: {
    encrypt: false, // Cambia a true si usas Azure
    trustServerCertificate: true, // Evita errores de certificado
  },
};

 async function connectDB() {
  try {
    const pool = await sql.connect(dbConfig);
    console.log("✅ Conectado a SQL Server");
    return pool;
  } catch (error) {
    console.error("❌ Error en la conexión a SQL Server:", error);
  }
}

module.exports = { connectDB, sql };


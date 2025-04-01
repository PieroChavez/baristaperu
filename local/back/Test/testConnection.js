// testConnection.js
const { connect, close, sql } = require('../db');

async function test() {
  try {
    await connect(); // Conectar a la base de datos
    console.log('Conexión exitosa');

    // Ejecutar una consulta de prueba
    const result = await sql.query`SELECT 1 AS test`;
    console.log('Resultado de la consulta:', result.recordset);
  } catch (error) {
    console.error('Error en la conexión:', error);
  } finally {
    await close(); // Cerrar la conexión
  }
}

test();
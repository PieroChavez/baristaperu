const express = require("express");
const { connectDB, sql } = require("./db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/baristas", async (req, res) => {
  try {
    const pool = await connectDB();
    const result = await pool.request().query("SELECT * FROM Baristas");
    res.json(result.recordset);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error en el servidor");
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

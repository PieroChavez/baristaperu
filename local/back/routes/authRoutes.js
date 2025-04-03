const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { connectDB, sql } = require("../db");

const router = express.Router();

// Clave secreta para firmar los tokens (cámbiala en producción)
const SECRET_KEY = "tu_secreto_super_seguro";

// **Registro de usuario**
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const pool = await connectDB();

    // Verifica si el usuario ya existe
    const checkUser = await pool
      .request()
      .input("email", sql.VarChar, email)
      .query("SELECT * FROM users WHERE email = @email");

    if (checkUser.recordset.length > 0) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    // Hashear la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insertar el usuario en la BD
    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("email", sql.VarChar, email)
      .input("password", sql.VarChar, hashedPassword)
      .query(
        "INSERT INTO users (name, email, password) VALUES (@name, @email, @password)"
      );

    res.status(201).json({ message: "Usuario registrado correctamente" });
  } catch (error) {
    console.error("Error en el registro:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
});

// **Inicio de sesión**
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const pool = await connectDB();

    // Buscar el usuario por email
    const userResult = await pool
      .request()
      .input("email", sql.VarChar, email)
      .query("SELECT * FROM users WHERE email = @email");

    if (userResult.recordset.length === 0) {
      return res.status(400).json({ message: "Usuario no encontrado" });
    }

    const user = userResult.recordset[0];

    // Verificar la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Contraseña incorrecta" });
    }

    // Generar un token JWT
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
      expiresIn: "1h",
    });

    res.json({ message: "Inicio de sesión exitoso", token });
  } catch (error) {
    console.error("Error en el login:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
});

module.exports = router;

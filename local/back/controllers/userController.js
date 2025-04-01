// controllers/userController.js
const { connect, close, sql } = require('../db');

const UserController = {
  // Obtener todos los usuarios
  getAllUsers: async (req, res) => {
    try {
      await connect(); // Conectar a la base de datos
      const result = await sql.query`SELECT * FROM Users`; // Ejecutar la consulta
      res.status(200).json(result.recordset); // Enviar la respuesta
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      res.status(500).json({ message: 'Error al obtener usuarios', error });
    } finally {
      await close(); // Cerrar la conexión
    }
  },

  // Obtener un usuario por ID
  getUserById: async (req, res) => {
    try {
      const { id } = req.params;
      await connect();
      const result = await sql.query`SELECT * FROM Users WHERE UserID = ${id}`;
      if (result.recordset.length > 0) {
        res.status(200).json(result.recordset[0]);
      } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
      }
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
      res.status(500).json({ message: 'Error al obtener el usuario', error });
    } finally {
      await close();
    }
  },

  // Crear un nuevo usuario
  createUser: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      await connect();
      const result = await sql.query`
        INSERT INTO Users (Name, Email, PasswordHash)
        VALUES (${name}, ${email}, ${password})
      `;
      res.status(201).json({ message: 'Usuario creado exitosamente' });
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      res.status(500).json({ message: 'Error al crear el usuario', error });
    } finally {
      await close();
    }
  },

  // Actualizar un usuario
  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email, password } = req.body;
      await connect();
      const result = await sql.query`
        UPDATE Users
        SET Name = ${name}, Email = ${email}, PasswordHash = ${password}
        WHERE UserID = ${id}
      `;
      res.status(200).json({ message: 'Usuario actualizado exitosamente' });
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
      res.status(500).json({ message: 'Error al actualizar el usuario', error });
    } finally {
      await close();
    }
  },

  // Eliminar un usuario
  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      await connect();
      const result = await sql.query`DELETE FROM Users WHERE UserID = ${id}`;
      res.status(200).json({ message: 'Usuario eliminado exitosamente' });
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      res.status(500).json({ message: 'Error al eliminar el usuario', error });
    } finally {
      await close();
    }
  },
};

module.exports = UserController;
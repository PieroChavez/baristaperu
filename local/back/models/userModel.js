const { poolPromise } = require('../config/db');

const UserModel = {
  async getAllUsers() {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM Users');
    return result.recordset;
  },

  async getUserById(id) {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input('id', sql.Int, id)
      .query('SELECT * FROM Users WHERE id = @id');
    return result.recordset[0];
  },

  async createUser(user) {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input('name', sql.VarChar, user.name)
      .input('email', sql.VarChar, user.email)
      .query('INSERT INTO Users (name, email) VALUES (@name, @email)');
    return result.rowsAffected;
  },

  async updateUser(id, user) {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input('id', sql.Int, id)
      .input('name', sql.VarChar, user.name)
      .input('email', sql.VarChar, user.email)
      .query('UPDATE Users SET name = @name, email = @email WHERE id = @id');
    return result.rowsAffected;
  },

  async deleteUser(id) {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input('id', sql.Int, id)
      .query('DELETE FROM Users WHERE id = @id');
    return result.rowsAffected;
  },
};

module.exports = UserModel;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Auth.css"; // Importa el archivo CSS

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Conectar a la base de datos
      await connect();

      if (isLogin) {
        // Consulta para login
        const result = await sql.query`
          SELECT UserID, Name, Email
          FROM Users
          WHERE Email = ${formData.email} AND PasswordHash = ${formData.password}
        `;

        if (result.recordset.length > 0) {
          const user = result.recordset[0];
          alert(`Bienvenido, ${user.Name}`);
          localStorage.setItem("token", "fake-token"); // Simulación de token
          navigate("/"); // Redirigir a la página principal
        } else {
          throw new Error("Credenciales incorrectas");
        }
      } else {
        // Consulta para registro
        const result = await sql.query`
          INSERT INTO Users (Name, Email, PasswordHash)
          VALUES (${formData.name}, ${formData.email}, ${formData.password})
        `;
        console.log(result); // Log the result to use the variable

        alert("Usuario registrado exitosamente");
        setIsLogin(true); // Cambiar a la vista de login
      }
    } catch (error) {
      alert(error.message);
    } finally {
      // Cerrar la conexión
      await close();
    }
  };

  return (
    <div className="auth-container">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="auth-card"
      >
        <h2>{isLogin ? "Iniciar Sesión" : "Crear Cuenta"}</h2>

        <motion.form
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          onSubmit={handleSubmit}
          className="auth-form"
        >
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Nombre Completo"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="auth-button"
          >
            {isLogin ? "Ingresar" : "Registrarse"}
          </motion.button>
        </motion.form>

        <p>
          {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}{" "}
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Regístrate" : "Inicia Sesión"}
          </button>
        </p>
      </motion.div>
    </div>
  );
}
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";

    try {
      const response = await fetch(`http://localhost:3000${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message);

      alert(data.message);

      if (isLogin) {
        // Guarda el token en localStorage y redirige a Home
        localStorage.setItem("token", data.token);
      }

      // Redirige a Home.jsx después de iniciar sesión o registrarse
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md text-center"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{isLogin ? "Iniciar Sesión" : "Crear Cuenta"}</h2>

        <motion.form initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
          onSubmit={handleSubmit} className="flex flex-col gap-4"
        >
          {!isLogin && (
            <input type="text" name="name" placeholder="Nombre Completo" value={formData.name} onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition shadow-sm" required
            />
          )}
          <input type="email" name="email" placeholder="Correo Electrónico" value={formData.email} onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition shadow-sm" required
          />
          <input type="password" name="password" placeholder="Contraseña" value={formData.password} onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition shadow-sm" required
          />
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            {isLogin ? "Ingresar" : "Registrarse"}
          </motion.button>
        </motion.form>

        <p className="mt-4 text-gray-600">
          {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}{" "}
          <button className="text-blue-500 hover:underline font-semibold" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Regístrate" : "Inicia Sesión"}
          </button>
        </p>
      </motion.div>
    </div>
  );
}
  
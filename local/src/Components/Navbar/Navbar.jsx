import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

// Importa las imágenes
import productor from "../../assets/images/Navbar/productor.png";
import tostador from "../../assets/images/Navbar/tostador.png";
import capuccino from "../../assets/images/Navbar/capuccino.png";

const allIngredients = [
  { icon: productor, label: "Productor", description: "Encargado de cultivar y cosechar los granos de café con dedicación y cuidado." },
  { icon: tostador, label: "Tostador", description: "Especialista en tostar los granos de café para resaltar sus sabores y aromas únicos." },
  { icon: capuccino, label: "Barista", description: "Experto en preparar y servir bebidas de café con creatividad y precisión." },
  { icon: productor, label: "Catador", description: "Profesional que evalúa la calidad y el perfil de sabor del café." },
  { icon: tostador, label: "Cafetería", description: "El lugar donde los amantes del café se reúnen para disfrutar de su bebida favorita." },
  { icon: capuccino, label: "Coffee Lover", description: "Apasionado del café que disfruta explorando nuevos sabores y experiencias." },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(allIngredients[0]);
  const [showRegistrationAlert, setShowRegistrationAlert] = useState(false);

  // Efecto para mostrar la alerta de registro cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setShowRegistrationAlert(true);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      {/* Título y botón de login */}
      <header className="header">
        <h1 className="title">Barista Estudios</h1>
        <p className="subtitle">By Barista Estudios</p>
        <button className="login-button" onClick={() => navigate("/auth")}>
          Login
        </button>
      </header>

      {/* Contenido principal */}
      <main className="main-content">
        <div className="icon-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab.label}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="icon"
            >
              <img src={selectedTab.icon} alt={selectedTab.label} style={{ width: "330px", height: "300px", borderRadius: "50%" }} />
            </motion.div>
          </AnimatePresence>
        </div>
        <p className="role-description">{selectedTab.description}</p>
      </main>

      {/* Nav en la parte inferior */}
      <nav className="nav">
        <ul className="tabs-container">
          {allIngredients.map((item) => (
            <motion.li
              key={item.label}
              initial={false}
              animate={{
                backgroundColor: item === selectedTab ? "#eee" : "#eee0",
              }}
              className="tab"
              onClick={() => setSelectedTab(item)}
            >
              <img src={item.icon} alt={item.label} style={{ width: "24px", height: "24px", borderRadius: "50%" }} />
              {item.label}
              {item === selectedTab ? <motion.div className="underline" layoutId="underline" id="underline" /> : null}
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Alerta de registro */}
      {showRegistrationAlert && (
        <div className="registration-alert">
          <p>
            ¿No tienes una cuenta? <strong>Regístrate ahora</strong> para disfrutar de todos los beneficios.
          </p>
          <button onClick={() => setShowRegistrationAlert(false)}>Cerrar</button>
          <button onClick={() => navigate("/auth")}>Registrarse</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;

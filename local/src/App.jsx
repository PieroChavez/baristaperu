import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importa componentes
import NavbarComponent from "./Components/Navbar/Navbar";
import Login from "./Pages/Login/Login"; // Pantalla de autenticación (Login)
import Home from "./Pages/Home/Home"; // Pantalla de inicio
import Inicio from "./Components/Inicio/inicio"; // Pantalla de inicio principal
import Footer from "./Components/Footer/Footer"; // Componente de pie de página

// Importa estilos
import "./App.css"; // Estilos globales
import "@mantine/core/styles.css"; // Estilos de Mantine
import "bootstrap/dist/css/bootstrap.min.css";

// Importa Theme de Radix
//import { Theme } from "@radix-ui/themes";
//import { ThemePanel } from "@radix-ui/themes";

function App() {
  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          {/* Ruta principal */}
          <Route path="/" element={<Inicio />} />

          {/* Ruta para Login */}
          <Route path="/Login" element={<Login />} />

          {/* Ruta para Home */}
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
      {/*<ThemePanel />*/}

    </>
  );
}

export default App;
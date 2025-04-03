import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./Pages/Login/Auth"; // Pantalla de autenticación (Login)
//import Register from "./Pages/Register/Register"; // Pantalla de registro
import Home from "./Pages/Home/Home"; // Pantalla de inicio
//import Profile from "./Pages/Profile/Profile"; // Pantalla de perfil
import Inicio from "./Components/Inicio/inicio"; // Pantalla de inicio principal
import Footer from "./Components/Footer/Footer"; // Componente de pie de página
import "./App.css"; // Importa los estilos globales
import '@mantine/core/styles.css'; // Estilos de Mantine
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Ruta principal */}
          <Route path="/" element={<Inicio />} />

          {/* Ruta para Login */}
          <Route path="/auth" element={<Auth />} />

          {/* Ruta para Registro          <Route path="/register" element={<Register />} />
 */}

          {/* Ruta para Home */}
          <Route path="/home" element={<Home />} />

          {/* Ruta para Perfil             <Route path="/profile" element={< />} />
*/}
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;

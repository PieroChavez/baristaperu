import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Auth from "./Pages/Login/Auth"; // Importa la pantalla de autenticación
import Home from "./Pages/Home/Home"; // Importa la pantalla de inicio
import "./App.css"; // Importa los estilos
//import Navbar from "./Components/Navbar/Navbar";
import Inicio from "./Components/Inicio/inicio";
import Footer from "./Components/Footer/Footer";



import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { NavbarSearch } from "./Components/Navbar/Navbar";



function App() {
  return (
    <>
    <MantineProvider>{NavbarSearch}</MantineProvider>;
   
    <Router>
        <Routes>
          
          <Route path="/auth" element={<Auth />} /> {/* Página de autenticación */}
          <Route path="/home" element={<Home />} /> {/* Página de inicio */}


          
          <Route path="/" element={<>  <Inicio />  </>} />

        </Routes>
     
    </Router>
    <Footer />
    </>
  );
}

export default App;

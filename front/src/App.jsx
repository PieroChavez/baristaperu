import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login/Login";
import Logout from "./Components/Login/Logout";
import Home from "./Pages/Home/Home";
import Loading from "./Components/Loading/Loading";

function App() {
  
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <Loading/>;

  return (
    <>
    <h1>Hola Cafetero</h1>
    <Router>
      <Routes>
        {/* Ruta para la pantalla de inicio de sesión */}
        <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Login />} />
        
        {/* Ruta para la página Home */}
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />

        {/* Si el usuario está autenticado, mostramos el botón de logout */}
        <Route path="/logout" element={isAuthenticated ? <Logout /> : <Navigate to="/" />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

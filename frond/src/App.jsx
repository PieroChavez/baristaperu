// src/App.jsx
import React from 'react';
import { HashRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from './ThemeContext';

import Home from './components/Pages/Home/Home';
import Index from './components/Pages/Index';
import Profile from './components/Pages/Home/Profile';
import Navbar from './components/Layaouts/Navbar';
import Footer from './components/Layaouts/Footer';

import { useAuth0 } from '@auth0/auth0-react';

// Componente de ruta privada usando Auth0
function PrivateRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/" replace />;
}

// Componente auxiliar para redirección después de login
function AuthRedirect() {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <HashRouter>
        <AuthRedirect />
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Rutas protegidas con Auth0 */}
          {/* <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} /> */}
          {/* <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} /> */}
          {/* Rutas públicas para pruebas */}
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;

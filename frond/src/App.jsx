// src/App.jsx
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from './ThemeContext';

import Home from './components/Pages/Home/Home';
import Index from './components/Pages/Index';
import Profile from './components/Pages/Home/Profile';
import Nosotros from './components/Pages/Home/Nosotros';
import Store from './components/Pages/Home/Store'; // crea este componente si no existe
import Navbar from './components/Layaouts/Navbar';
import Footer from './components/Layaouts/Footer';

import { useAuth0 } from '@auth0/auth0-react';

// Ruta privada protegida con Auth0
const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) return <div>Cargando...</div>;
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

// Redirección auxiliar si entras a /redirect (opcional)
const AuthRedirect = () => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? <Navigate to="/home" replace /> : <Navigate to="/" replace />;
};

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/redirect" element={<AuthRedirect />} />
          {/* Rutas privadas */}
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/nosotros"
            element={
              <PrivateRoute>
                <Nosotros />
              </PrivateRoute>
            }
          />
          <Route
            path="/Store"
            element={
              <PrivateRoute>
                <Store />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;

// src/App.jsx
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from './ThemeContext'; // ✅ Importa tu contexto personalizado

import Login from './components/Pages/Auth/Login';
import Home from './components/Pages/Home/Home';
import Index from './components/Pages/Index';
import Profile from './components/Pages/Home/Profile';
import Navbar from './components/Layaouts/Navbar';
import Footer from './components/Layaouts/Footer';

// Componente de ruta privada
function PrivateRoute({ children }) {
  const isAuthenticated = !!localStorage.getItem('token');
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          {/* Rutas protegidas (temporalmente libres para pruebas) */}
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;

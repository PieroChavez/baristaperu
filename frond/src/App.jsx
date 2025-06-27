import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from './ThemeContext';
import { useMediaQuery } from '@mui/material';

import Home from './components/Pages/Home/Home';
import Index from './components/Pages/Index';
import Profile from './components/Pages/Home/Profile';
import Nosotros from './components/Pages/Home/Nosotros';
import Store from './components/Pages/Home/Store';
import Navbar from './components/Layaouts/Navbar';
import User from './components/Pages/user/User';

import { useAuth0 } from '@auth0/auth0-react';
import MobileNavBar from './components/Layaouts/MobileNavBar';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) return <div>Cargando...</div>;
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

const AuthRedirect = () => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? <Navigate to="/home" replace /> : <Navigate to="/" replace />;
};

function App() {
  // Detecta si la pantalla es mayor a 1000px de ancho
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');

  return (
    <ThemeProvider>
      <CssBaseline />
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/redirect" element={<AuthRedirect />} />
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
            path="/store"
            element={
              <PrivateRoute>
                <Store />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/:id"
            element={
              <PrivateRoute>
                <User />
              </PrivateRoute>
            }
          />
        </Routes>

        {/* SOLO SE MUESTRA EN MODO MÓVIL */}
        {!isNonMobileScreens && <MobileNavBar />}
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;

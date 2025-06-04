import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Pages/Auth/Login'
import Home from './components/Pages/Home/Home'
import Index from './components/Pages/Index'
import Profile from './components/Pages/Home/Profile'
import Navbar from './components/Layaouts/Navbar'
import Footer from './components/Layaouts/Footer'

// Componente de ruta privada
function PrivateRoute({ children }) {
  const isAuthenticated = !!localStorage.getItem('token'); // Cambia 'token' por tu clave real
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <HashRouter>
      <Navbar />      
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        
        {/*
        <Route
          path="/Home"
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
        */}
        {/* Rutas públicas temporales para desarrollo */}
        <Route path="/Home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App

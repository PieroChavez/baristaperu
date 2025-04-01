import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./App.css";
import Inicio from "./Components/Inicio/inicio";
import Footer from "./Components/Footer/Footer";
import '@mantine/core/styles.css';
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import Navbar from "./Components/Navbar/Navbar";

const AppContent = () => {
  const location = useLocation();
  const isAuthPage = ['/login', '/register'].includes(location.pathname);

  return (
    <>
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Inicio />} />
      </Routes>
      {!isAuthPage && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
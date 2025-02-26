import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../Profile/Profile";
import Logout from "../../Components/Login/Logout"; // Asegúrate de que la ruta sea correcta

const Home = () => {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <h1>Acceso no autorizado</h1>;
  }

  return (
    <div className="home-container">
      <h1>Hola, {user?.name || "Usuario"}!</h1>

      <Profile />
      
      {/* Aquí agregamos el botón de Logout */}
      <Logout />
    </div>
  );
};

export default Home;

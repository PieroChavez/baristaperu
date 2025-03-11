import React from "react";
import "./Loading.css"; // Agregamos CSS para estilos

const Loading = () => {
  return (
    <div className="loading-container">
      <img
        src="/barista-minecraft.gif" // Asegúrate de tener esta imagen en /public o reemplazarla con un link real
        alt="Barista Minecraft preparando café"
        className="loading-image"
      />
      <h1>☕ Espera, estamos preparando tu café... ☕</h1>
    </div>
  );
};

export default Loading;

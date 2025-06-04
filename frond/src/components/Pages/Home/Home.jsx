








import { Box, useMediaQuery, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import {Rol} from "../../../assets/RolUser/Rol";
//import Team from "../../Components/Cards/Team";

const Home = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  const nombreUsuario = localStorage.getItem("nombre") || "Nombre no disponible";
  const rolUsuario = localStorage.getItem("rol") || "Rol no disponible";
  const sexoUsuario = localStorage.getItem("sexo") || "";
  const imagenUsuario = localStorage.getItem("imagen") || "";

  const getImagenPorSexo = () => {
    if (imagenUsuario) return imagenUsuario;
    if (sexoUsuario.toLowerCase() === "femenino") return Rol[0].image;
    if (sexoUsuario.toLowerCase() === "masculino") return Rol[1].image;
    return Rol[2].image;
  };

  const user = {
    _id: "abc123",
    picturePath: getImagenPorSexo(),
    name: nombreUsuario,
    rol: rolUsuario,
  };

  const posts = [
    {
      id: 1,
      user: "Carlos Ríos",
      content: "Hoy preparé un Chemex increíble 🤎 #coffeeLovers",
    },
    {
      id: 2,
      user: "Valeria Pérez",
      content: "El arte latte es una pasión 🎨☕️",
    },
  ];

  return (
    <Box>
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        {/* Columna izquierda */}
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <Box
            p="1rem"
            bgcolor="#f9fafb"
            borderRadius="1rem"
            boxShadow="0 0 10px rgba(0,0,0,0.1)"
            textAlign="center"
          >
            <img
              src={user.picturePath}
              alt="Usuario"
              style={{ borderRadius: "50%", width: "80px", marginBottom: "1rem" }}
            />
            <Typography variant="h6">{user.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              {user.rol}
            </Typography>
          </Box>
        </Box>

        {/* Columna central */}
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <Box
            p="1rem"
            bgcolor="#ffffff"
            borderRadius="1rem"
            mb="1rem"
            boxShadow="0 0 10px rgba(0,0,0,0.1)"
          >
            <Typography variant="h6">
              ¡Hola {user.name}! ¿En qué estás pensando?
            </Typography>
            <input
              type="text"
              placeholder="Comparte algo sobre café..."
              style={{
                marginTop: "0.5rem",
                width: "100%",
                padding: "0.75rem",
                borderRadius: "0.5rem",
                border: "1px solid #ccc",
              }}
            />
          </Box>

          {posts.map((post) => (
            <Box
              key={post.id}
              p="1rem"
              bgcolor="#f0f0f0"
              borderRadius="1rem"
              mb="1rem"
              boxShadow="0 0 5px rgba(0,0,0,0.05)"
            >
              <Typography variant="subtitle1" fontWeight="bold">
                {post.user}
              </Typography>
              <Typography variant="body1">{post.content}</Typography>
            </Box>
          ))}
        </Box>

        {/* Columna derecha */}
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <Box
              p="1rem"
              bgcolor="#fff3cd"
              borderRadius="1rem"
              boxShadow="0 0 10px rgba(0,0,0,0.1)"
              mb="2rem"
            >
              <Typography variant="h6">Anuncio</Typography>
              <Typography variant="body2">
                ¡Nuevo curso de barismo nivel intermedio! ✨
              </Typography>
            </Box>

            <Box
              p="1rem"
              bgcolor="#d1fae5"
              borderRadius="1rem"
              boxShadow="0 0 10px rgba(0,0,0,0.1)"
            >
              <Typography variant="h6">Amigos</Typography>
              <Typography variant="body2"> {/*<Team/>*/} </Typography>
              
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Home;




import { Box, useMediaQuery, Typography, Avatar, IconButton, Stack, Link as MuiLink } from "@mui/material";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import EventIcon from '@mui/icons-material/Event';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useState, useEffect } from "react";
import {Rol} from "../../../assets/RolUser/Rol";
import Stories from "@/components/Layaouts/Stories";
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
        padding={isNonMobileScreens ? "4.5rem 1%" : "4rem 0.5rem"}
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        {/* Columna izquierda */}
        <Box
          flexBasis={isNonMobileScreens ? "22%" : "100%"}
          mb={isNonMobileScreens ? 0 : 2}
        >
          <Box
            p="1rem"
            bgcolor="#f9fafb"
            borderRadius="1rem"
            boxShadow="0 0 10px rgba(0,0,0,0.1)"
            display="flex"
            alignItems="center"
            gap={2}
            flexDirection={isNonMobileScreens ? "row" : "column"}
          >
            {/* Imagen a la izquierda */}
            <Avatar
              src={user.picturePath}
              alt="Usuario"
              sx={{ width: 100, height: 100 }}
            />
            {/* Info a la derecha */}
            <Box flex="1" width="100%">
              <Typography variant="h6" align={isNonMobileScreens ? "inherit" : "center"}>
                {user.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" align={isNonMobileScreens ? "inherit" : "center"}>
                {user.rol}
              </Typography>
              <Typography variant="body2" color="textSecondary" align={isNonMobileScreens ? "inherit" : "center"}>
                País: Perú
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }} align={isNonMobileScreens ? "inherit" : "center"}>
                Breve descripción del usuario...
              </Typography>
              {/* Estadísticas */}
              <Stack direction="row" spacing={2} sx={{ mt: 1 }} justifyContent={isNonMobileScreens ? "flex-start" : "center"}>
                <Box textAlign="center">
                  <Typography variant="subtitle2" fontWeight="bold">12</Typography>
                  <Typography variant="caption" color="textSecondary">Publicaciones</Typography>
                </Box>
                <Box textAlign="center">
                  <Typography variant="subtitle2" fontWeight="bold">120</Typography>
                  <Typography variant="caption" color="textSecondary">Seguidores</Typography>
                </Box>
                <Box textAlign="center">
                  <Typography variant="subtitle2" fontWeight="bold">80</Typography>
                  <Typography variant="caption" color="textSecondary">Seguidos</Typography>
                </Box>
              </Stack>
              {/* Redes sociales */}
              <Stack direction="row" spacing={1} sx={{ mt: 1 }} justifyContent={isNonMobileScreens ? "flex-start" : "center"}>
                <MuiLink href="https://facebook.com" target="_blank" color="inherit">
                  <IconButton size="small"><FacebookIcon /></IconButton>
                </MuiLink>
                <MuiLink href="https://instagram.com" target="_blank" color="inherit">
                  <IconButton size="small"><InstagramIcon /></IconButton>
                </MuiLink>
                <MuiLink href="https://github.com" target="_blank" color="inherit">
                  <IconButton size="small"><GitHubIcon /></IconButton>
                </MuiLink>
                <MuiLink href="mailto:correo@ejemplo.com" color="inherit">
                  <IconButton size="small"><EmailIcon /></IconButton>
                </MuiLink>
                <MuiLink
                  href="https://wa.me/51999999999"
                  target="_blank"
                  color="inherit"
                >
                  <IconButton size="small"><WhatsAppIcon /></IconButton>
                </MuiLink>
              </Stack>
            </Box>
          </Box>
        </Box>

        {/* Columna central */}
        <Box
          flexBasis={isNonMobileScreens ? "56%" : "100%"}
          mt={isNonMobileScreens ? undefined : 2}
        >
          <Box
            p="1rem"
            bgcolor="#ffffff"
            borderRadius="1rem"
            mb="1rem"
            boxShadow="0 0 10px rgba(0,0,0,0.1)"
          >
            <Typography variant="h6" display="flex" alignItems="center" gap={1}>
              <Avatar
                src={user.picturePath}
                alt={user.name}
                sx={{ width: 32, height: 32, mr: 1 }}
              />
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
            <Box
              display="flex"
              justifyContent="center" // Cambia esto para ajustar la distribución horizontal
              alignItems="center"
              gap={7}                 // Cambia este valor para acercar o separar los iconos
              mt={2}
            >
              <Box display="flex" flexDirection="column" alignItems="center">
                <IconButton size="small" color="primary">
                  <PhotoCameraIcon />
                </IconButton>
                <Typography variant="caption" color="textSecondary">
                  Foto
                </Typography>
              </Box>
              <Box display="flex" flexDirection="column" alignItems="center">
                <IconButton size="small" color="primary">
                  <EventIcon />
                </IconButton>
                <Typography variant="caption" color="textSecondary">
                  Evento
                </Typography>
              </Box>
              <Box display="flex" flexDirection="column" alignItems="center">
                <IconButton size="small" color="primary">
                  <MenuBookIcon />
                </IconButton>
                <Typography variant="caption" color="textSecondary">
                  Blog
                </Typography>
              </Box>
            </Box>
          </Box>
          <Stories />

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
          <Box flexBasis="22%">
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




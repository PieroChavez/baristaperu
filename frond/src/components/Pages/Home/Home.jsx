import { Box, useMediaQuery, Typography, Avatar, IconButton, Stack, Link as MuiLink, Button } from "@mui/material";


import UserWidget from "@/components/Scenes/Widgets/UserWidget";

import {Rol} from "../../../assets/RolUser/Rol";
import Stories from "@/components/Layaouts/Stories";
import { useNavigate } from "react-router-dom";
import FriendListWidget from "@/components/Scenes/Widgets/FriendListWidget";
import AdvertWidget from "@/components/Scenes/Widgets/AdvertWidget";
import MyPostWidget from "@/components/Scenes/Widgets/MyPostWidget";

const Home = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const navigate = useNavigate();

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
          <UserWidget />

        </Box>

        {/* Columna central */}
        <Box
          flexBasis={isNonMobileScreens ? "56%" : "100%"}
          mt={isNonMobileScreens ? undefined : 2}
        >
          <MyPostWidget/>
          <Stories />

          {posts.map((post) => (
            <Box
              key={post.id}
              p="1rem"
             bgcolor="#f6f6f610"
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
           <AdvertWidget/>

           <FriendListWidget/>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Home;




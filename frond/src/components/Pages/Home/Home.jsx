import { Box, useMediaQuery, Typography } from "@mui/material";
import UserWidget from "@/components/Scenes/Widgets/UserWidget";
import Stories from "@/components/Layaouts/Stories";
import { useNavigate } from "react-router-dom";
import FriendListWidget from "@/components/Scenes/Widgets/FriendListWidget";
import AdvertWidget from "@/components/Scenes/Widgets/AdvertWidget";
import MyPostWidget from "@/components/Scenes/Widgets/MyPostWidget";
import { useAuth0 } from "@auth0/auth0-react";
import PostsWidget from "@/components/Scenes/Widgets/PostsWidget";
import Logos from "@/components/Layaouts/Logos";

const Home = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading } = useAuth0();

  // Puedes mostrar un loader si lo deseas
  if (isLoading) return <div>Cargando...</div>;
  if (!isAuthenticated) return null;



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
           padding="1rem"
             sx={{
            overflowY: "auto",
            maxHeight: "100vh", // Altura máxima limitada a la pantalla
          }}
           
        >
          <MyPostWidget />
          <Stories /> 

          <PostsWidget />          
        </Box>

        {/* Columna derecha */}
        {isNonMobileScreens && (
          <Box flexBasis="22%">
            <AdvertWidget />
            <FriendListWidget />
             <Logos/>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Home;




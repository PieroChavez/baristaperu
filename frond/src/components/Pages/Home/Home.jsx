import { Box, useMediaQuery } from "@mui/material";
import UserWidget from "@/components/Scenes/Widgets/UserWidget";
import Stories from "@/components/Layaouts/Stories";
import { useNavigate } from "react-router-dom";
import FriendListWidget from "@/components/Scenes/Widgets/FriendListWidget";
import AdvertWidget from "@/components/Scenes/Widgets/AdvertWidget";
import MyPostWidget from "@/components/Scenes/Widgets/MyPostWidget";
import { useAuth0 } from "@auth0/auth0-react";
import PostsWidget from "@/components/Scenes/Widgets/PostsWidget";
import Logos from "@/components/Layaouts/Logos";
import MobileNavBar from "@/components/Layaouts/MobileNavBar";

const Home = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Cargando...</div>;
  if (!isAuthenticated) return null;

  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Box
        flexGrow={1}
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
        padding={isNonMobileScreens ? "4.5rem 1%" : "4rem 0.5rem"}
      >
        {/* Columna izquierda */}
        <Box
          flexBasis={isNonMobileScreens ? "22%" : "100%"}
          mb={isNonMobileScreens ? 0 : 2}
        >
          <UserWidget />
          <Logos />
        </Box>

        {/* Columna central scrollable */}
        <Box
          flexBasis={isNonMobileScreens ? "56%" : "100%"}
          sx={{
            px: isNonMobileScreens ? "2rem" : "1rem",
            py: "1rem",
            overflowY: isNonMobileScreens ? "auto" : "visible",
            maxHeight: isNonMobileScreens ? "calc(100vh - 5rem)" : "none",
            mx: "auto",
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
          </Box>
        )}
      </Box>

      {/* Navbar móvil solo en pantallas pequeñas */}
      {!isNonMobileScreens && <MobileNavBar />}
    </Box>
  );
};

export default Home;

import React from "react";
import {
  Box,
  Typography,
  Avatar,
} from "@mui/material";

import VideocamIcon from "@mui/icons-material/Videocam";
import ImageIcon from "@mui/icons-material/Image";
import MovieIcon from "@mui/icons-material/Movie";

import { useAuth0 } from "@auth0/auth0-react";

const MyPostWidget = () => {
  const { user } = useAuth0();
  if (!user) return null;

  const profileImage = user.picture;
  const userName = user.name || user.nickname || "Usuario";

  return (
    <Box
      bgcolor="#ffffff1a"
      borderRadius="1rem"
      boxShadow="0 1px 3px rgba(0,0,0,0.1)"
      p={2}
    >
      {/* Header: Avatar + input redondeado */}
      <Box display="flex" alignItems="center" gap={2}>
        <Avatar
          src={profileImage}
          alt={userName}
          sx={{ width: 40, height: 40 }}
        />
        <Box
          flex={1}
          bgcolor="#f0f2f517"
          borderRadius="2rem"
          px={3}
          py={1.5}
          sx={{
            fontSize: "0.95rem",
            color: "#65676b",
            border: "1px solid #ccd0d5",
          }}
        >
          ¿Qué estás pensando, {userName}?
        </Box>
      </Box>

      <Box mt={2} borderTop="1px solid #ddd" />

      {/* Acciones (como Facebook) */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
        <Box
          display="flex"
          alignItems="center"
          gap={1}
          flex={1}
          justifyContent="center"
          sx={{ cursor: "pointer" }}
        >
          <VideocamIcon sx={{ color: "#f3425f" }} />
          <Typography variant="body2" color="#65676b">
            Video en vivo
          </Typography>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          gap={1}
          flex={1}
          justifyContent="center"
          sx={{ cursor: "pointer" }}
        >
          <ImageIcon sx={{ color: "#45bd62" }} />
          <Typography variant="body2" color="#65676b">
            Foto/video
          </Typography>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          gap={1}
          flex={1}
          justifyContent="center"
          sx={{ cursor: "pointer" }}
        >
          <MovieIcon sx={{ color: "#f02849" }} />
          <Typography variant="body2" color="#65676b">
            Reel
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MyPostWidget;

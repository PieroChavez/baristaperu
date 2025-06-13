import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Stack,
  Link as MuiLink,
  Button,
  useMediaQuery,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const UserWidget = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const navigate = useNavigate();

  // Auth0
  const { user: auth0User, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Cargando...</div>;
  if (!isAuthenticated || !auth0User) return null;

  return (
    <Box
      p="1rem"
      bgcolor="#f6f6f610"
      borderRadius="1rem"
      boxShadow="0 0 10px rgba(0,0,0,0.1)"
      display="flex"
      alignItems="center"
      gap={2}
      flexDirection={isNonMobileScreens ? "row" : "column"}
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar
          src={auth0User.picture}
          alt={auth0User.name}
          sx={{ width: 100, height: 100 }}
        />
        <Button
          variant="outlined"
          size="small"
          sx={{ mt: 1, mb: 1, textTransform: "none" }}
          onClick={() => navigate("/profile")}
        >
          Editar perfil
        </Button>
      </Box>

      <Box flex="1" width="100%">
        <Typography variant="h6" align={isNonMobileScreens ? "inherit" : "center"}>
          {auth0User.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" align={isNonMobileScreens ? "inherit" : "center"}>
          {auth0User.email}
        </Typography>
        <Typography variant="body2" color="textSecondary" align={isNonMobileScreens ? "inherit" : "center"}>
          País: Perú
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ mt: 1 }}
          align={isNonMobileScreens ? "inherit" : "center"}
        >
          Breve descripción del usuario...
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          sx={{ mt: 1 }}
          justifyContent={isNonMobileScreens ? "flex-start" : "center"}
        >
          <Box textAlign="center">
            <Typography variant="subtitle2" fontWeight="bold">
              12
            </Typography>
            <Typography variant="caption" color="textSecondary">
              Publicaciones
            </Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="subtitle2" fontWeight="bold">
              120
            </Typography>
            <Typography variant="caption" color="textSecondary">
              Seguidores
            </Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="subtitle2" fontWeight="bold">
              80
            </Typography>
            <Typography variant="caption" color="textSecondary">
              Seguidos
            </Typography>
          </Box>
        </Stack>

        <Stack
          direction="row"
          spacing={1}
          sx={{ mt: 1 }}
          justifyContent={isNonMobileScreens ? "flex-start" : "center"}
        >
          <MuiLink href="https://facebook.com" target="_blank" color="inherit">
            <IconButton size="small">
              <FacebookIcon />
            </IconButton>
          </MuiLink>
          <MuiLink href="https://instagram.com" target="_blank" color="inherit">
            <IconButton size="small">
              <InstagramIcon />
            </IconButton>
          </MuiLink>
          <MuiLink href="https://github.com" target="_blank" color="inherit">
            <IconButton size="small">
              <GitHubIcon />
            </IconButton>
          </MuiLink>
          <MuiLink href="mailto:correo@ejemplo.com" color="inherit">
            <IconButton size="small">
              <EmailIcon />
            </IconButton>
          </MuiLink>
          <MuiLink href="https://wa.me/51999999999" target="_blank" color="inherit">
            <IconButton size="small">
              <WhatsAppIcon />
            </IconButton>
          </MuiLink>
        </Stack>
      </Box>
    </Box>
  );
};

export default UserWidget;

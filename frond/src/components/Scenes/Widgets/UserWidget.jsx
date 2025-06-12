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
import { useSelector } from "react-redux";
import { Rol } from "../../../assets/RolUser/Rol";

const UserWidget = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const navigate = useNavigate();

  // Obtenemos los datos desde Redux
  const userData = useSelector((state) => state.user.user);

  // Validaciones en caso no haya sesión activa
  const nombreUsuario = userData?.nombre || "Nombre no disponible";
  const rolUsuario = userData?.rol || "Rol no disponible";
  const sexoUsuario = userData?.sexo || "";
  const imagenUsuario = userData?.imagen || "";

  // Determina la imagen del usuario según su sexo o imagen personalizada
  const getImagenPorSexo = () => {
    if (imagenUsuario) return imagenUsuario;
    if (sexoUsuario.toLowerCase() === "femenino") return Rol[0].image;
    if (sexoUsuario.toLowerCase() === "masculino") return Rol[1].image;
    return Rol[2].image;
  };

  const user = {
    picturePath: getImagenPorSexo(),
    name: nombreUsuario,
    rol: rolUsuario,
  };

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
          src={user.picturePath}
          alt="Usuario"
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
          {user.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" align={isNonMobileScreens ? "inherit" : "center"}>
          {user.rol}
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

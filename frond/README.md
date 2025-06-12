# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.














import { Box, useMediaQuery } from "@mui/material";
//import Navbar from "scenes/navbar";
//import UserWidget from "scenes/widgets/UserWidget"; // Importamos el widget de usuario
import { useSelector } from "react-redux";

const Home = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user); // Obtenemos datos del usuario del store

  return (
    <Box>
      {/* Aquí más adelante colocaremos el Navbar */}
      {/* <Navbar /> */}

      {/* Contenedor principal de la página */}
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          {/* Mostramos el widget del usuario */}
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>

        {/* Aquí más adelante colocaremos MyPostWidget y PostsWidget */}
        <Box flexBasis={isNonMobileScreens ? "42%" : undefined} mt={isNonMobileScreens ? undefined : "2rem"}>
          {/* Lo implementaremos después */}
        </Box>

        {/* Widgets derechos: anuncio y amigos */}
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            {/* Lo implementaremos después */}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Home;



















// Archivo: ProfileDashboard.jsx
import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  IconButton,
  Divider,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../Scenes/Status/store'; // Acción para actualizar el usuario en Redux

const ProfileDashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    nombre: user?.nombre || '',
    rol: user?.rol || '',
    descripcion: user?.descripcion || '',
    imagen: user?.imagen || '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, imagen: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    dispatch(updateUser(formData));
    setEditMode(false);
  };

  return (
    <Box
      bgcolor="#f9f9f9"
      p={4}
      borderRadius={4}
      boxShadow="0 2px 8px rgba(0,0,0,0.1)"
      maxWidth={600}
      mx="auto"
      mt={4}
    >
      <Stack direction="column" alignItems="center" spacing={2}>
        <input
          accept="image/*"
          style={{ display: 'none' }}
          id="upload-photo"
          type="file"
          onChange={handleImageUpload}
        />
        <label htmlFor="upload-photo">
          <IconButton component="span">
            <Avatar src={formData.imagen} sx={{ width: 100, height: 100 }} />
          </IconButton>
        </label>

        {editMode ? (
          <>
            <TextField
              label="Nombre"
              name="nombre"
              fullWidth
              value={formData.nombre}
              onChange={handleChange}
            />
            <TextField
              label="Rol"
              name="rol"
              fullWidth
              value={formData.rol}
              onChange={handleChange}
            />
            <TextField
              label="Descripción"
              name="descripcion"
              fullWidth
              multiline
              rows={3}
              value={formData.descripcion}
              onChange={handleChange}
            />
            <Button
              variant="contained"
              startIcon={<SaveIcon />}
              onClick={handleSave}
            >
              Guardar
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h5">{formData.nombre}</Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {formData.rol}
            </Typography>
            <Typography variant="body1" align="center">
              {formData.descripcion || 'Agrega una descripción personal.'}
            </Typography>
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              onClick={() => setEditMode(true)}
            >
              Editar Perfil
            </Button>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default ProfileDashboard;

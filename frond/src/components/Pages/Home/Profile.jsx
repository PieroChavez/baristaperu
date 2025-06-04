












import React from 'react';
import { Rol } from '../../../assets/RolUser/Rol';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Typography,
  Box,
  IconButton,
  Toolbar,
  AppBar,
  CssBaseline,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SettingsIcon from '@mui/icons-material/Settings';
import CampaignIcon from '@mui/icons-material/Campaign';
import HelpIcon from '@mui/icons-material/Help';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

// Obtén datos del usuario desde localStorage o usa valores por defecto
const nombreUsuario = localStorage.getItem("nombre") || "Nombre no disponible";
const rolUsuario = localStorage.getItem("rol") || "barista";

// Prueba: usa la imagen del índice 0 del array Rol (female.png)
const getAvatarByRol = () => {
  return Rol[0].image;
};

export default function Profile() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar src={getAvatarByRol()} sx={{ width: 56, height: 56 }} />
          <Box>
            <Typography variant="subtitle1" noWrap>{nombreUsuario}</Typography>
            <Typography variant="body2" color="text.secondary" noWrap>{rolUsuario}</Typography>
          </Box>
        </Box>
      </Toolbar>
      <Divider />
      <List>
        <ListItem button component="a" href="/">
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component="a" href="/events">
          <ListItemIcon><EventIcon /></ListItemIcon>
          <ListItemText primary="Events" />
        </ListItem>
        <ListItem button component="a" href="/orders">
          <ListItemIcon><ReceiptIcon /></ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button component="a" href="/settings">
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button component="a" href="/broadcasts">
          <ListItemIcon><CampaignIcon /></ListItemIcon>
          <ListItemText primary="Broadcasts" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component="a" href="/support">
          <ListItemIcon><HelpIcon /></ListItemIcon>
          <ListItemText primary="Support" />
        </ListItem>
        <ListItem button component="a" href="/changelog">
          <ListItemIcon><AutoAwesomeIcon /></ListItemIcon>
          <ListItemText primary="Changelog" />
        </ListItem>
        <ListItem button component="a" href="/logout">
          <ListItemIcon><LogoutIcon /></ListItemIcon>
          <ListItemText primary="Sign out" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Baristas Perú
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="sidebar folders"
      >
        {/* Drawer para mobile */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        {/* Drawer para desktop */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mt: 8,
        }}
      >
        {/* Aquí va el contenido principal de la página */}
        <Typography variant="h4">Bienvenido, {nombreUsuario}!</Typography>
      </Box>
    </Box>
  );
}






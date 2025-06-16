import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { DemoProvider, useDemoRouter } from '@toolpad/core/internal';

const NAVIGATION = [
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <ShoppingCartIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function Profile(props) {
  const { window } = props;

  const router = useDemoRouter('/dashboard');
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <DemoProvider window={demoWindow}>
      {/* preview-start */}
      <AppProvider
        navigation={NAVIGATION}
        branding={{
          logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
          title: 'MUI',
          homeUrl: '/toolpad/core/introduction',
        }}
        router={router}
        theme={demoTheme}
        window={demoWindow}
      >
        <DashboardLayout>
          <DemoPageContent pathname={router.pathname} />
        </DashboardLayout>
      </AppProvider>
      {/* preview-end */}
    </DemoProvider>
  );
}

Profile.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default Profile;

































import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export default function Profile() {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) return <div className="p-8 text-center text-gray-500">Cargando...</div>;
  if (!isAuthenticated || !user) return null;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col sm:flex-row">
      {/* Sidebar */}
      <aside className="w-full sm:w-64 bg-white shadow-md flex-shrink-0">
        <div className="flex flex-col items-center py-8 border-b">
          <img
            src={user.picture}
            alt={user.name}
            className="w-20 h-20 rounded-full border-4 border-indigo-200 shadow"
          />
          <h2 className="mt-4 text-lg font-semibold text-gray-800">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
        <nav className="mt-6">
          <ul className="flex flex-col gap-1 px-4">
            <li>
              <Link
                to="/"
                className="flex items-center gap-3 px-4 py-2 rounded hover:bg-indigo-50 text-gray-700 transition"
              >
                <span className="material-icons text-indigo-500">home</span>
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className="flex items-center gap-3 px-4 py-2 rounded hover:bg-indigo-50 text-gray-700 transition"
              >
                <span className="material-icons text-indigo-500">event</span>
                Eventos
              </Link>
            </li>
            <li>
              <Link
                to="/orders"
                className="flex items-center gap-3 px-4 py-2 rounded hover:bg-indigo-50 text-gray-700 transition"
              >
                <span className="material-icons text-indigo-500">receipt</span>
                Pedidos
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="flex items-center gap-3 px-4 py-2 rounded hover:bg-indigo-50 text-gray-700 transition"
              >
                <span className="material-icons text-indigo-500">settings</span>
                Configuración
              </Link>
            </li>
            <li>
              <Link
                to="/broadcasts"
                className="flex items-center gap-3 px-4 py-2 rounded hover:bg-indigo-50 text-gray-700 transition"
              >
                <span className="material-icons text-indigo-500">campaign</span>
                Anuncios
              </Link>
            </li>
          </ul>
          <div className="border-t my-4" />
          <ul className="flex flex-col gap-1 px-4">
            <li>
              <Link
                to="/support"
                className="flex items-center gap-3 px-4 py-2 rounded hover:bg-indigo-50 text-gray-700 transition"
              >
                <span className="material-icons text-indigo-500">help</span>
                Soporte
              </Link>
            </li>
            <li>
              <Link
                to="/changelog"
                className="flex items-center gap-3 px-4 py-2 rounded hover:bg-indigo-50 text-gray-700 transition"
              >
                <span className="material-icons text-indigo-500">auto_awesome</span>
                Novedades
              </Link>
            </li>
            <li>
              <button
                onClick={() => logout({ returnTo: window.location.origin })}
                className="w-full flex items-center gap-3 px-4 py-2 rounded hover:bg-red-50 text-red-600 transition"
              >
                <span className="material-icons">logout</span>
                Cerrar sesión
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Bienvenido, {user.name}!
        </h1>
        <p className="text-gray-600 mb-4">Email: {user.email}</p>
        <div className="bg-white rounded shadow p-6">
          <h2 className="text-xl font-semibold mb-2 text-indigo-700">Tu panel de usuario</h2>
          <p className="text-gray-500">
            Aquí puedes ver y editar tu información, revisar tus pedidos, eventos y más.
          </p>
        </div>
      </main>
    </div>
  );
}

























import React from 'react';
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
import {
  Home as HomeIcon,
  Event as EventIcon,
  Receipt as ReceiptIcon,
  Settings as SettingsIcon,
  Campaign as CampaignIcon,
  Help as HelpIcon,
  AutoAwesome as AutoAwesomeIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';

const drawerWidth = 240;

function HomeSection() {
  return <Typography variant="h5">🏠 Esta es la sección de inicio</Typography>;
}

function EventsSection() {
  return <Typography variant="h5">📅 Eventos programados</Typography>;
}

function OrdersSection() {
  return <Typography variant="h5">🧾 Tus pedidos</Typography>;
}

function SettingsSection() {
  return <Typography variant="h5">⚙️ Ajustes de tu perfil</Typography>;
}

function BroadcastsSection() {
  return <Typography variant="h5">📣 Comunicados</Typography>;
}

function SupportSection() {
  return <Typography variant="h5">🆘 Centro de soporte</Typography>;
}

function ChangelogSection() {
  return <Typography variant="h5">✨ Novedades y cambios</Typography>;
}

export default function Profile() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { user, logout, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  if (isLoading) return <Typography>Cargando usuario...</Typography>;
  if (!isAuthenticated) return <Typography>No autorizado</Typography>;

  const { name, picture, email } = user;

  const drawer = (
    <div>
      <Toolbar>
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar src={picture} sx={{ width: 56, height: 56 }} />
          <Box>
            <Typography variant="subtitle1" noWrap>{name}</Typography>
            <Typography variant="body2" color="text.secondary" noWrap>{email}</Typography>
          </Box>
        </Box>
      </Toolbar>
      <Divider />
      <List>
        <ListItem button component={Link} to="">
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="events">
          <ListItemIcon><EventIcon /></ListItemIcon>
          <ListItemText primary="Eventos" />
        </ListItem>
        <ListItem button component={Link} to="orders">
          <ListItemIcon><ReceiptIcon /></ListItemIcon>
          <ListItemText primary="Pedidos" />
        </ListItem>
        <ListItem button component={Link} to="settings">
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Configuración" />
        </ListItem>
        <ListItem button component={Link} to="broadcasts">
          <ListItemIcon><CampaignIcon /></ListItemIcon>
          <ListItemText primary="Comunicados" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} to="support">
          <ListItemIcon><HelpIcon /></ListItemIcon>
          <ListItemText primary="Soporte" />
        </ListItem>
        <ListItem button component={Link} to="changelog">
          <ListItemIcon><AutoAwesomeIcon /></ListItemIcon>
          <ListItemText primary="Novedades" />
        </ListItem>
        <ListItem button onClick={() => logout({ returnTo: window.location.origin })}>
          <ListItemIcon><LogoutIcon /></ListItemIcon>
          <ListItemText primary="Cerrar sesión" />
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
            Baristas Perú - Perfil
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="sidebar folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
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
        {/* Aquí se renderiza el contenido interno según la ruta */}
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="events" element={<EventsSection />} />
          <Route path="orders" element={<OrdersSection />} />
          <Route path="settings" element={<SettingsSection />} />
          <Route path="broadcasts" element={<BroadcastsSection />} />
          <Route path="support" element={<SupportSection />} />
          <Route path="changelog" element={<ChangelogSection />} />
        </Routes>
      </Box>
    </Box>
  );
}

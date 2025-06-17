import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import Avatar from '@mui/material/Avatar';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { DemoProvider, useDemoRouter } from '@toolpad/core/internal';
import { useAuth0 } from '@auth0/auth0-react';
import { NavLink } from "react-router-dom";
import logo from '../../../../src/assets/logo.PNG'; // Asegúrate de que esta ruta sea válida

const NAVIGATION = [
  {
    kind: 'header',
    title: 'MENÚ PRINCIPAL',
  },
  {
    segment: 'profile',
    title: 'Perfil',
    icon: <AccountCircleIcon />,
  },
  {
    segment: 'orders',
    title: 'Pedidos',
    icon: <ShoppingCartIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'reports',
    title: 'Reportes',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'sales',
        title: 'Ventas',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'traffic',
        title: 'Tráfico',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'integrations',
    title: 'Integraciones',
    icon: <LayersIcon />,
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
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiTypography: {
      defaultProps: {
        noWrap: true,
      },
    },
  },
});

function DemoPageContent({ pathname }) {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <Box sx={{ py: 4, textAlign: 'center' }}>
        <Typography>Cargando...</Typography>
      </Box>
    );
  }

  if (!isAuthenticated || !user) {
    return (
      <Box sx={{ py: 4, textAlign: 'center' }}>
        <Typography>No hay datos de usuario.</Typography>
      </Box>
    );
  }

  if (pathname === '/profile') {
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
        <Avatar
          src={user.picture}
          alt={user.name}
          sx={{ width: 96, height: 96, mb: 2 }}
        />
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          {user.name}
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          {user.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ID: {user.sub}
        </Typography>
      </Box>
    );
  }

  if (pathname === '/orders') {
    return (
      <Box sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Mis Pedidos
        </Typography>
        {/* Aquí puedes agregar lista de pedidos */}
      </Box>
    );
  }

  return (
    <Box sx={{ py: 4, textAlign: 'center' }}>
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function Profile(props) {
  const { window } = props;
  const router = useDemoRouter('/profile');
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <DemoProvider window={demoWindow}>
      <AppProvider
        navigation={NAVIGATION}
        router={router}
        theme={demoTheme}
        window={demoWindow}
        branding={{
          logo: (
            <NavLink to="/home" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
              <img
                src={logo}
                alt="Logo Baristas"
                style={{ height: 32, marginRight: 8 }}
              />
                <Typography
                variant="h6"
                sx={{
                  color: 'primary.main',
                  fontWeight: 'bold',
                  letterSpacing: 1,
                }}
              >
                BARISTAS
              </Typography>
            </NavLink>
          ),
          title: '',
          homeUrl: '/home', // Puedes dejarlo así o eliminarlo si no lo usas
        }}
      >
        <DashboardLayout>
          <DemoPageContent pathname={router.pathname} />
        </DashboardLayout>
      </AppProvider>
    </DemoProvider>
  );
}

Profile.propTypes = {
  window: PropTypes.func,
};

export default Profile;

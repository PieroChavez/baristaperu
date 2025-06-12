// src/components/Pages/Auth/Login.jsx
import * as React from 'react';
import {
  Button, FormControl, Checkbox, FormControlLabel, InputLabel, OutlinedInput,
  TextField, InputAdornment, Link, Alert, IconButton, Box
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';
import RegisterForm from './Register';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../../components/Scenes/Status/userSlice';
import { useNavigate } from 'react-router-dom';

const providers = [{ id: 'credentials', name: 'Correo y contraseña' }];

function CustomEmailField() {
  return (
    <TextField
      label="Correo"
      name="correo"
      type="email"
      size="small"
      required
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle fontSize="inherit" />
          </InputAdornment>
        ),
      }}
      variant="outlined"
    />
  );
}

function CustomPasswordField() {
  const [showPassword, setShowPassword] = React.useState(false);
  const togglePassword = () => setShowPassword((show) => !show);

  return (
    <FormControl sx={{ my: 2 }} fullWidth variant="outlined">
      <InputLabel size="small">Contraseña</InputLabel>
      <OutlinedInput
        type={showPassword ? 'text' : 'password'}
        name="password"
        size="small"
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={togglePassword} edge="end" size="small">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Contraseña"
      />
    </FormControl>
  );
}

function CustomButton() {
  return (
    <Button type="submit" variant="contained" color="primary" size="small" fullWidth sx={{ my: 2 }}>
      Iniciar sesión
    </Button>
  );
}

function RememberMeCheckbox() {
  return (
    <FormControlLabel
      label="Recuérdame"
      control={<Checkbox name="remember" value="true" color="primary" />}
    />
  );
}

function ForgotPasswordLink() {
  return (
    <Link href="#" variant="body2">
      ¿Olvidaste tu contraseña?
    </Link>
  );
}

function Title() {
  return <h2 style={{ marginBottom: 8 }}>Iniciar sesión</h2>;
}

function Subtitle() {
  return (
    <Alert sx={{ mb: 2 }} severity="info">
      Ingresa tus credenciales para acceder.
    </Alert>
  );
}

export default function Login() {
  const theme = useTheme();
  const [showRegister, setShowRegister] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSuccessfulLogin = (data) => {
    // Guarda usuario en Redux
    dispatch(setLogin(data.usuario));

    // Guarda token y usuario en localStorage
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.usuario));

    console.log('✅ Usuario logueado:', data.usuario);
    window.location.href = '/#/home';
  };

  if (showRegister) {
    return (
      <RegisterForm
        onBack={() => setShowRegister(false)}
        onRegisterSuccess={handleSuccessfulLogin}
      />
    );
  }

  return (
    <AppProvider theme={theme}>
      <SignInPage
        signIn={async (_, formData) => {
          const correo = formData.get('correo');
          const password = formData.get('password');

          if (!correo || !password) {
            alert('❌ Debes completar ambos campos');
            return;
          }

          try {
            const response = await fetch('http://localhost:3000/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ correo, password }),
            });

            const data = await response.json();

            if (response.ok) {
              handleSuccessfulLogin(data);
            } else {
              alert(`❌ ${data.mensaje || data.message}`);
            }
          } catch {
            alert('❌ Error de conexión con el servidor');
          }
        }}
        slots={{
          title: Title,
          subtitle: Subtitle,
          emailField: CustomEmailField,
          passwordField: CustomPasswordField,
          submitButton: CustomButton,
          rememberMe: RememberMeCheckbox,
          forgotPasswordLink: ForgotPasswordLink,
          signUpLink: () => (
            <Link
              component="button"
              type="button" // <-- Esto evita el submit
              variant="body2"
              onClick={() => navigate('/register')}
            >
              ¿No tienes cuenta? Regístrate
            </Link>
          ),
        }}
        providers={providers}
        slotProps={{ form: { noValidate: true } }}
      />
    </AppProvider>
  );
}

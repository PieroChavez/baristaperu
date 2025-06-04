import * as React from 'react';
import {
  Button,
  FormControl,
  Checkbox,
  FormControlLabel,
  InputLabel,
  OutlinedInput,
  TextField,
  InputAdornment,
  Link,
  Alert,
  IconButton,
  MenuItem,
  Box,
  Typography,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';

const providers = [{ id: 'credentials', name: 'Email and Password' }];

// -------------------- LOGIN COMPONENTES --------------------
function CustomEmailField() {
  return (
    <TextField
      id="input-with-icon-textfield"
      label="Email"
      name="email"
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

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl sx={{ my: 2 }} fullWidth variant="outlined">
      <InputLabel size="small" htmlFor="outlined-adornment-password">
        Password
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        name="password"
        size="small"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              size="small"
            >
              {showPassword ? (
                <VisibilityOff fontSize="inherit" />
              ) : (
                <Visibility fontSize="inherit" />
              )}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  );
}

function CustomButton() {
  return (
    <Button
      type="submit"
      variant="outlined"
      color="info"
      size="small"
      disableElevation
      fullWidth
      sx={{ my: 2 }}
    >
      Log In
    </Button>
  );
}

function SignUpLink({ onClick }) {
  return (
    <Link component="button" variant="body2" onClick={onClick}>
      ¿No tienes cuenta? Regístrate
    </Link>
  );
}

function ForgotPasswordLink() {
  return (
    <Link href="/" variant="body2">
      Forgot password?
    </Link>
  );
}

function Title() {
  return <h2 style={{ marginBottom: 8 }}>Login</h2>;
}

function Subtitle() {
  return (
    <Alert sx={{ mb: 2, px: 1, py: 0.25, width: '100%' }} severity="info">
      Ingresa tus credenciales para acceder.
    </Alert>
  );
}

function RememberMeCheckbox() {
  const theme = useTheme();
  return (
    <FormControlLabel
      label="Remember me"
      control={
        <Checkbox
          name="remember"
          value="true"
          color="primary"
          sx={{ padding: 0.5, '& .MuiSvgIcon-root': { fontSize: 20 } }}
        />
      }
      slotProps={{
        typography: {
          color: 'textSecondary',
          fontSize: theme.typography.pxToRem(14),
        },
      }}
    />
  );
}

// -------------------- REGISTRO COMPONENTE --------------------
function RegisterForm({ onBack }) {
  const [form, setForm] = React.useState({
    nombre: '',
    celular: '',
    rol: '',
    correo: '',
    sexo: '',
    password: '',
  });
  const [showPassword, setShowPassword] = React.useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí puedes hacer la petición al backend para registrar el usuario
    try {
      const response = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        alert('✅ Registro exitoso');
        if (onBack) onBack(); // Vuelve al login
      } else {
        alert(`❌ ${data.message}`);
      }
    } catch (error) {
      alert('❌ Error de conexión con el servidor');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', p: 2 }}>
      <Typography variant="h5" mb={2}>Registro</Typography>
      <TextField
        label="Nombre"
        name="nombre"
        value={form.nombre}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Celular"
        name="celular"
        value={form.celular}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
        inputProps={{ maxLength: 15 }}
      />
      <TextField
        select
        label="Rol"
        name="rol"
        value={form.rol}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      >
        <MenuItem value="barista">Barista</MenuItem>
        <MenuItem value="catador">Catador</MenuItem>
        <MenuItem value="tostador">Tostador</MenuItem>
      </TextField>
      <TextField
        label="Correo"
        name="correo"
        type="email"
        value={form.correo}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        select
        label="Sexo"
        name="sexo"
        value={form.sexo}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      >
        <MenuItem value="masculino">Masculino</MenuItem>
        <MenuItem value="femenino">Femenino</MenuItem>
      </TextField>
      <FormControl fullWidth margin="normal" required variant="outlined">
        <InputLabel>Contraseña</InputLabel>
        <OutlinedInput
          label="Contraseña"
          name="password"
          type={showPassword ? 'text' : 'password'}
          value={form.password}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword((show) => !show)}
                edge="end"
                size="small"
              >
                {showPassword ? <VisibilityOff fontSize="inherit" /> : <Visibility fontSize="inherit" />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Registrarse
      </Button>
      <Button onClick={onBack} color="secondary" fullWidth sx={{ mt: 1 }}>
        Volver al Login
      </Button>
    </Box>
  );
}

// -------------------- COMPONENTE PRINCIPAL --------------------
export default function AuthPage() {
  const theme = useTheme();
  const [showRegister, setShowRegister] = React.useState(false);

  return (
    <AppProvider theme={theme}>
      {showRegister ? (
        <RegisterForm onBack={() => setShowRegister(false)} />
      ) : (
        <SignInPage
          signIn={async (provider, formData) => {
            const email = formData.get('email');
            const password = formData.get('password');
            try {
              const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
              });
              const data = await response.json();
              if (response.ok) {
                alert('✅ Login exitoso');
                localStorage.setItem('user', JSON.stringify(data.user));
                // window.location.href = '/dashboard';
              } else {
                alert(`❌ ${data.message}`);
              }
            } catch (error) {
              console.error('Error al iniciar sesión:', error);
              alert('❌ Error de conexión con el servidor');
            }
          }}
          slots={{
            title: Title,
            subtitle: Subtitle,
            emailField: CustomEmailField,
            passwordField: CustomPasswordField,
            submitButton: CustomButton,
            signUpLink: () => <SignUpLink onClick={() => setShowRegister(true)} />,
            rememberMe: RememberMeCheckbox,
            forgotPasswordLink: ForgotPasswordLink,
          }}
          slotProps={{ form: { noValidate: true } }}
          providers={providers}
        />
      )}
    </AppProvider>
  );
}

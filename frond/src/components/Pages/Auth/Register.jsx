import React from 'react';
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  InputAdornment,
  IconButton,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = React.useState({
    nombre: '',
    celular: '',
    rol: '',
    correo: '',
    sexo: '',
    password: '',
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      console.log('Respuesta del servidor:', response);

      if (response.ok) {
        alert('✅ Registro exitoso');
        navigate('/login'); // Redirección inmediata
      } else {
        alert(`❌ ${data.message}`);
      }
    } catch (error) {
      console.error('Error al registrar:', error);
      alert('❌ Error de conexión con el servidor');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 400, mx: 'auto', p: 4 }}
    >
      <Typography variant="h5" mb={2}>
        Registro
      </Typography>

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
                onClick={() => setShowPassword((show) => !show)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      >
        Registrarse
      </Button>

      <Button
        onClick={() => navigate('/login')}
        color="secondary"
        fullWidth
        sx={{ mt: 1 }}
      >
        Volver al Login
      </Button>
    </Box>
  );
}

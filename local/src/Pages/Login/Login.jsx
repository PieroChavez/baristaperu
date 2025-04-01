import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Correo electrónico"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Contraseña"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Ingresar
          </button>
        </form>
        <div className="login-footer">
          <p>¿No tienes una cuenta? <Link to="/register">Regístrate</Link></p>
          <Link to="/forgot-password" className="forgot-password">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
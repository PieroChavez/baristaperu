import './Register.css'

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Crear Cuenta</h2>
        <form>
          <div className="form-group">
            <input
              type="text"
              placeholder="Nombre completo"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Correo electrónico"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Contraseña"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirmar contraseña"
              className="form-control"
            />
          </div>
          <button type="submit" className="register-button">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
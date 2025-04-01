import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-logo">
        <Link to="/">BaristasPeru</Link>
      </div>
      
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/cafes">Cafés</Link>
        </li>
        <li>
          <Link to="/cursos">Cursos</Link>
        </li>
        <li>
          <Link to="/nosotros">Nosotros</Link>
        </li>
        
        {/* Botón de Iniciar Sesión dentro del menú en modo móvil */}
        <li className="navbar-actions-mobile">
          <Link to="/login" className="navbar-button">
            Iniciar Sesión
          </Link>
        </li>
      </ul>

      {/* Botón de Iniciar Sesión fuera del menú en modo escritorio */}
      <div className="navbar-actions">
        <Link to="/login" className="navbar-button">
          Iniciar Sesión
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
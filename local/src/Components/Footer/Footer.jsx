import  'react';
import './Footer.css'; // Importa los estilos

const Footer = () => {


  return (
    <footer>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} By Barista Estudios.</p>

      </div>
    </footer>
  );
};

export default Footer;
// src/components/RotatingText.jsx
import { useEffect, useRef } from 'react';
import './RotatingText.css'; // Asegúrate de tener este archivo CSS
import { Link } from 'react-router-dom';
import navbarImages from '../../assets/images/Navbar/Navbar'; // Importa las imágenes y descripciones
import Button from '@mui/material/Button';






const RotatingText = () => {
  const listRef = useRef(null);

  // Configuración del tema con Tweakpane


  // Interacción de la lista
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const items = list.querySelectorAll('li');

    const setIndex = (event) => {
      const closest = event.target.closest('li');
      if (closest) {
        const index = [...items].indexOf(closest);
        const cols = new Array(list.children.length)
          .fill()
          .map((_, i) => {
            items[i].dataset.active = (index === i).toString();
            return index === i ? '10fr' : '1fr';
          })
          .join(' ');
        list.style.setProperty('grid-template-columns', cols);
      }
    };

    const resync = () => {
      const w = Math.max(
        ...[...items].map((i) => {
          return i.offsetWidth;
        })
      );
      list.style.setProperty('--article-width', w);
    };

    list.addEventListener('focus', setIndex, true);
    list.addEventListener('click', setIndex);
    list.addEventListener('pointermove', setIndex);
    window.addEventListener('resize', resync);
    resync();

    return () => {
      list.removeEventListener('focus', setIndex, true);
      list.removeEventListener('click', setIndex);
      list.removeEventListener('pointermove', setIndex);
      window.removeEventListener('resize', resync);
    };
  }, [listRef]);

  return (
    <div className="rotating-text">
      <h1 className="fluid">CAFICULTORES</h1>
      <p className="intro-text">
        Regístrate y sé parte de la comunidad más grande de cafés especiales del Perú.
      </p>
      <ul ref={listRef}>
        {navbarImages.map((item, index) => (
          <li key={index} data-active={index === 0}>
            <article>
              <h3>{item.alt}</h3>
              <img src={item.src} alt={item.alt} />
              <Link to="/auth">
               <Button variant="contained">INICIAR</Button>
              </Link>
            </article>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default RotatingText;
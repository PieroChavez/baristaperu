import { useEffect } from 'react';
import navbarImages from '../../assets/images/Navbar/Navbar';
import './inicio.css';

const Inicio = () => {
  useEffect(() => {
    const slider = document.querySelector('.slider');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    const progressBar = document.querySelector('.progress-bar');

    // Función para activar el cambio de imagen
    const activate = (direction) => {
      const items = document.querySelectorAll('.item');
      if (direction === 'next') {
        slider.appendChild(items[0]); // Mueve la primera imagen al final
      } else if (direction === 'prev') {
        slider.insertBefore(items[items.length - 1], items[0]); // Mueve la última imagen al inicio
      }
      resetProgressBar();
    };

    // Función para reiniciar la barra de progreso
    const resetProgressBar = () => {
      progressBar.style.animation = 'none';
      progressBar.offsetHeight; // Forzar el reflujo para reiniciar la animación
      progressBar.style.animation = 'progress 7s linear infinite';
    };

    // Agregar eventos a los botones
    const handleNext = () => activate('next');
    const handlePrev = () => activate('prev');

    nextButton.addEventListener('click', handleNext);
    prevButton.addEventListener('click', handlePrev);

    // Cambio automático de imágenes cada 7 segundos
    const autoChange = setInterval(() => activate('next'), 7000);

    // Limpieza de eventos y temporizador al desmontar el componente
    return () => {
      nextButton.removeEventListener('click', handleNext);
      prevButton.removeEventListener('click', handlePrev);
      clearInterval(autoChange);
    };
  }, []);

  return (
    <main>
      <ul className="slider">
        {navbarImages.map((slide, index) => (
          <li
            key={index}
            className="item"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="content">
              <h2 className="title">{slide.title}</h2>
              <p className="description">{slide.description}</p>
              <button className="btn btn-primary">Iniciar</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="progress-bar"></div>
      <nav className="nav">
        <button className="btn prev">&#9664;</button>
        <button className="btn next">&#9654;</button>
      </nav>
    </main>
  );
};

export default Inicio;

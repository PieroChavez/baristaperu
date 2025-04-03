import './inicio.css';
import { useEffect, useRef } from 'react';
import navbarImages from '../../assets/images/Navbar/Navbar'; // Importa navbarImages

const Inicio = () => {
  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const runningTimeRef = useRef(null);

  useEffect(() => {
    const nextBtn = carouselRef.current.querySelector('.next');
    const prevBtn = carouselRef.current.querySelector('.prev');
    const list = listRef.current;
    const runningTime = runningTimeRef.current;

    const timeRunning = 3000;
    const timeAutoNext = 7000;

    const showSlider = (type) => {
      const sliderItemsDom = list.querySelectorAll('.item');
      if (type === 'next') {
        list.appendChild(sliderItemsDom[0]);
        carouselRef.current.classList.add('next');
      } else {
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        carouselRef.current.classList.add('prev');
      }

      setTimeout(() => {
        carouselRef.current.classList.remove('next');
        carouselRef.current.classList.remove('prev');
      }, timeRunning);

      resetTimeAnimation();
    };

    const resetTimeAnimation = () => {
      runningTime.style.animation = 'none';
      runningTime.offsetHeight; // Trigger reflow
      runningTime.style.animation = 'runningTime 7s linear 1 forwards';
    };

    const handleNext = () => showSlider('next');
    const handlePrev = () => showSlider('prev');

    nextBtn.addEventListener('click', handleNext);
    prevBtn.addEventListener('click', handlePrev);

    const autoNext = setInterval(() => {
      showSlider('next');
    }, timeAutoNext);

    resetTimeAnimation();

    return () => {
      nextBtn.removeEventListener('click', handleNext);
      prevBtn.removeEventListener('click', handlePrev);
      clearInterval(autoNext);
    };
  }, []);

  return (
    <div>
      <header>
        <nav></nav>
      </header>

      <div className="carousel" ref={carouselRef}>
        <div className="list" ref={listRef}>
          {navbarImages.map((item, index) => (
            <div
              key={index}
              className="item"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="content">
                <div className="title">{item.title}</div>
                <div className="name">{item.alt}</div>
                <div className="des">{item.description}</div>
                <div className="btn">
                  <button
                    onClick={() => {
                      window.location.href = '/login';
                    }}
                  >
                    Conocer
                  </button>

                  <button
                    className="cn"
                    onClick={() => {
                      window.open(
                        'https://wa.me/51962387203?text=¡Hola!%20Estoy%20interesado%20en%20contactarte.',
                        '_blank'
                      );
                    }}
                  >
                    Contactar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button className="prev">&lt;</button>
          <button className="next">&gt;</button>
        </div>

        <div className="timeRunning" ref={runningTimeRef}></div>
      </div>

    </div>
  );
};

export default Inicio;
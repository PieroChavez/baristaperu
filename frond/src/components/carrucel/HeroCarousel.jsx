import './HeroCarousel.css';
import React, { useEffect, useRef } from 'react';


import veintiseis from '../../assets/marañon/DSC00777.jpg';
import DJI_0491_HDR from '../../assets/marañon/DJI_0491-HDR.jpg';
import nueve from '../../assets/marañon/DSC00735.jpg';

import DJI_0437 from '../../assets/marañon/DSC00626.jpg';


const HeroCarousel = () => {
  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const runningTimeRef = useRef(null);

  useEffect(() => {
    const nextBtn = carouselRef.current.querySelector('.next');
    const prevBtn = carouselRef.current.querySelector('.prev');
    const list = listRef.current;
    const runningTime = runningTimeRef.current;

    let timeRunning = 3000;
  let timeAutoNext = 7000;

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
      nextBtn.click();
    }, timeAutoNext);

    resetTimeAnimation();

    return () => {
      nextBtn.removeEventListener('click', handleNext);
      prevBtn.removeEventListener('click', handlePrev);
      clearInterval(autoNext);
    };
  }, []);

  const items = [
   
    {title:"Rentabilidad", name: 'Turismo y Paz', image: nueve,      descriptions: "Invertir en Viña del Marañón es una oportunidad única que fusiona tres pilares fundamentales para una inversión exitosa: rentabilidad, turismo y paz. ¡Es el momento perfecto para tomar acción y asegurar tu futuro financiero!"},
    {title:"Vida", name: 'Saludable', image: veintiseis   ,      descriptions: "Cultiva tus propios ingredientes" },
    {title:"Conoce el condomminio", name: 'Viña del Marañon', image:  DJI_0491_HDR ,      descriptions: "¡Bienvenidos al Condominio Viña del Marañón! Un paraíso en Jaén, donde la vida de campo se fusiona con la comodidad moderna. Imagina despertar cada mañana rodeado de paisajes verdes, aire puro y una inmensa tranquilidad. Viña del Marañón te invita a disfrutar de una vida plena, con la posibilidad de conectarte con la naturaleza sin renunciar a la cercanía con la ciudad. Ven y vive donde el espíritu de campo y el confort se encuentran, en un entorno seguro, exclusivo y lleno de oportunidades para disfrutar en familia."},
    {title:"Jaen", name: 'Cultura milenaria', image: DJI_0437 ,      descriptions: 'Jaén es una ciudad llena de historia, cultura vibrante y una rica tradición gastronómica que cautiva a todos sus visitantes. Su clima cálido y su gente amable la convierten en el destino perfecto para quienes buscan un lugar donde el espíritu de la naturaleza se encuentra con la calidez humana, Vivir en Jaén es sumergirse en un estilo de vida tranquilo, rodeado de naturaleza, con acceso a una ciudad en crecimiento y una cultura que se vive en cada rincón. ¡Haz de Jaén tu nuevo hogar y disfruta de lo mejor de la vida, donde tradición y modernidad se encuentran!'},

    // { name: 'BUTTERFLY', image: DSC00928 },
  
    // { name: 'EAGLE', image: DJI_0551 },
    // { name: 'KINGFISHER', image: DSC00450},
    // { name: 'PARROT', image: DSC00314 },
    // { name: 'HERON', image: DSC00383 },
    // { name: 'BUTTERFLY', image: DSC00500 },
  ];

  return (
    <div>
      <header>
        <nav>
         
         
        </nav>
      </header>

      <div className="carousel" ref={carouselRef}>
        <div className="list" ref={listRef}>
          {items.map((item, index) => (
            <div
              key={index}
              className="item"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="content">
                <div className="title">{item.title}</div>
                <div className="name">{item.name}</div>
                <div className="des"> {item.descriptions}   </div>
                <div className="btn">
                <button
  onClick={() => {
    window.location.href = "/proyectos";
  }}
>
  Conocer
</button>

                  
                  <button className="cn"  onClick={() => {  window.open(   "https://wa.me/51962387203?text=¡Hola!%20Estoy%20interesado%20en%20contactarte.",   "_blank"    );  }}>  Contactar</button>

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

export default HeroCarousel;
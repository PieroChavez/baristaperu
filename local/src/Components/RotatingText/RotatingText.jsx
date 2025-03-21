// src/components/RotatingText.jsx
import  { useEffect, useRef } from 'react';
import { Pane } from 'tweakpane';
import './RotatingText.css'; // Asegúrate de tener este archivo CSS
import { Link } from 'react-router-dom';

const RotatingText = () => {
  const listRef = useRef(null);

  // Configuración del tema con Tweakpane
  useEffect(() => {
    const config = {
      theme: 'system',
    };

    const ctrl = new Pane({
      title: 'Config',
      expanded: true,
    });

    const update = () => {
      document.documentElement.dataset.theme = config.theme;
    };

    const sync = (event) => {
      if (
        !document.startViewTransition ||
        event.target.controller.view.labelElement.innerText !== 'Theme'
      )
        return update();
      document.startViewTransition(() => update());
    };

    ctrl.addBinding(config, 'theme', {
      label: 'Theme',
      options: {
        System: 'system',
        Light: 'light',
        Dark: 'dark',
      },
    });

    ctrl.on('change', sync);
    update();

    return () => {
      ctrl.dispose(); // Limpiar Tweakpane al desmontar el componente
    };
  }, []);

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
        <li data-active="true">
          <article>
            <h3>PRODUCTOR</h3>
            <p>
              Gain the confidence to build anything you envision, transforming
              motion, interaction, and design principles into second nature.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 3h12l4 6-10 13L2 9Z" />
              <path d="M11 3 8 9l4 13 4-13-3-6" />
              <path d="M2 9h20" />
            </svg>
            <Link to="/auth"> {/* Reemplaza <a> con <Link> */}
              <span>Iniciar ahora</span>
            </Link>
            <img src="https://picsum.photos/720/720?random=12" alt="" />
          </article>
        </li>
        <li>
          <article>
            <h3>TOSTADOR</h3>
            <p>
              Master CSS animations from your very first set of @keyframes right
              through to things no one else ever teaches you.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M7 3v18" />
              <path d="M3 7.5h4" />
              <path d="M3 12h18" />
              <path d="M3 16.5h4" />
              <path d="M17 3v18" />
              <path d="M17 7.5h4" />
              <path d="M17 16.5h4" />
            </svg>
            <Link to="/auth"> {/* Reemplaza <a> con <Link> */}
              <span>Iniciar ahora</span>
            </Link>
            <img src="https://picsum.photos/720/720?random=17" alt="" />
          </article>
        </li>
        <li>
          <article>
            <h3>CATADOR</h3>
            <p>
              Shaders on a budget. Learn how to use noise to your advantage whilst
              making flames and stickers.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
            <Link to="/auth"> {/* Reemplaza <a> con <Link> */}
              <span>Iniciar ahora</span>
            </Link>
            <img src="https://picsum.photos/720/720?random=19" alt="" />
          </article>
        </li>
        <li>
          <article>
            <h3>Barista</h3>
            <p>
              Take your users on a journey with the joy of tasteful scroll
              animation. You might not even need JavaScript.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 17V5a2 2 0 0 0-2-2H4" />
              <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
            </svg>
            <Link to="/auth"> {/* Reemplaza <a> con <Link> */}
              <span>Iniciar ahora</span>
            </Link>
            <img src="https://picsum.photos/720/720?random=42" alt="" />
          </article>
        </li>
        <li>
          <article>
            <h3>CAFETERIA</h3>
            <p>
              Grasp how to tame the pixel playground and when to do so. Whilst
              building with Performance Driven Development.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
              <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
              <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
              <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
            </svg>
            <Link to="/auth"> {/* Reemplaza <a> con <Link> */}
              <span>Iniciar ahora</span>
            </Link>
            <img src="https://picsum.photos/720/720?random=128" alt="" />
          </article>
        </li>
        <li>
          <article>
            <h3>LABORATORIO</h3>
            <p>
              Do you really need a library for that? Sometimes stepping back and
              rethinking the problem yields a nifty solution.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" />
              <path d="m14 7 3 3" />
              <path d="M5 6v4" />
              <path d="M19 14v4" />
              <path d="M10 2v2" />
              <path d="M7 8H3" />
              <path d="M21 16h-4" />
              <path d="M11 3H9" />
            </svg>
            <Link to="/auth"> {/* Reemplaza <a> con <Link> */}
              <span>Iniciar ahora</span>
            </Link>
            <img src="https://picsum.photos/720/720?random=56" alt="" />
          </article>
        </li>
        <li>
          <article>
            <h3>COFFEE LOVERS</h3>
            <p>
              Its not all just easings and compositions. Time plays a crucial
              part in various UI patterns that might not seem obvious at first.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 22h14" />
              <path d="M5 2h14" />
              <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
              <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
            </svg>
            <Link to="/auth"> {/* Reemplaza <a> con <Link> */}
              <span>Iniciar ahora</span>
            </Link>
            <img src="https://picsum.photos/720/720?random=39" alt="" />
          </article>
        </li>
      </ul>
      <a
        className="bear-link"
        href="https://www.instagram.com/barista_estudios/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <svg
          className="w-9"
          viewBox="0 0 969 955"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M745.643 288.24C815.368 344.185 854.539 432.623 854.539 511.741H614.938V454.652C614.938 433.113 597.477 415.652 575.938 415.652H388.37C366.831 415.652 349.37 433.113 349.37 454.652V511.741L110.949 511.741C110.949 432.623 150.12 344.185 219.845 288.24C289.57 232.295 384.138 200.865 482.744 200.865C581.35 200.865 675.918 232.295 745.643 288.24Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>
  );
};

export default RotatingText;
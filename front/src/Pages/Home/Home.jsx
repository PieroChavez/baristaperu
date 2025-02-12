import 'react';
import './Home.css';
import RotatingText from './RotatingText'; // Importa el componente correctamente

const Home = () => {
  return (
    <div className='home-container'>
      <RotatingText
  texts={['Baristas', 'Catadores', 'Tostadores', 'Productores!']}
  mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
/>
<div> GAY EL QUE NO REACCIONA</div>
    </div>
  );
};

export default Home;

import 'react'
import './Home.css'
import Paginations from '../../Components/Paginations/Paginations';
//import { NavbarSearch } from '../../Components/Navbar/Navbar'
const Home = () => {
  return (
    <> 
    <div className="home-container">
      
      
        <h1 className="home-title">Bienvenido a Barista Estudios</h1>
        <p className="home-subtitle">By Barista Estudios</p>
    
            
      
    </div>
    <Paginations/>
    </>
  )
}

export default Home;

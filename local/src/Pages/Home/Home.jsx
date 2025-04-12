import 'react'
import './Home.css'
import Paginations from '../../Components/Paginations/Paginations';


import { Button, HStack } from "@chakra-ui/react"


//import { NavbarSearch } from '../../Components/Navbar/Navbar'
const Home = () => {
  return (
    <> 
    <div className="home-container">
    <HStack>
      <Button>Click me</Button>
      <Button>Click me</Button>
    </HStack>
      
      
        <h1 className="home-title">Bienvenido a Barista Estudios</h1>
        <p className="home-subtitle">By Barista Estudios</p>
    
            
      
    </div>
    <Paginations/>
    </>
  )
}

export default Home;

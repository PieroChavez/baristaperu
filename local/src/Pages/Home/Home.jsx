import 'react'
import './Home.css'
import Paginations from '../../Components/Paginations/Paginations';


import { Button, HStack } from "@chakra-ui/react"


//import { NavbarSearch } from '../../Components/Navbar/Navbar'
import navbarImage from '../../assets/images/Navbar/alison.jpg'
const Home = () => {
  return (
    <> 
    <div className="home-container">
<<<<<<< HEAD
    <button class="bg-blue text-indigo-600 hover:bg-indigo-600 hover:text-white ...">
  <svg class="size-5 fill-current ...">
  
  </svg>
  Check for updates
</button>
<button class="bg-white text-pink-600 hover:bg-pink-600 hover:text-white ...">
  <svg class="size-5 stroke-current ..." fill="none">
    
  </svg>
  Download file
</button>


  

=======
    <HStack>
      <Button>Click me</Button>
      <Button>Click me</Button>
    </HStack>
      
>>>>>>> 1a93fbd375b0c167c4244e9212b584b2c8bd5917
      
        <h1 className="home-title">Bienvenido a Barista Estudios</h1>
        <p className="home-subtitle">By Barista Estudios</p>
        
    


{/*<div


  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <button class="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">Submit</button>
  <article>
  <time>Mar 10, 2020</time>
  <h2>Boost your conversion rate</h2>
  <p class="line-clamp-3">
    Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut
    sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat
    dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt
    ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur
    enim.
  </p>
  <div>
    <img src="/img/lindsay.jpg" />
    Lindsay Walton
  </div>
</article>
      className="bg-fixed bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${navbarImage})` }}
    >
       Mountain
        
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec venenatis enim. Donec euismod, nisi eget
          consectetur sagittis, nisl nunc aliquet nunc, eget tincidunt nisl nunc eget nisi.
        
      

</div> */}



{/*<div
  className="bg-center bg-repeat w-full h-64" // agrega tus clases de tamaño
  style={{ backgroundImage: `url(${navbarImage})` }}
></div>*/}
<svg class="fill-blue-500 ...">
  
</svg>
  
      
    </div>
    <Paginations/>
    </>
  )
}

export default Home;

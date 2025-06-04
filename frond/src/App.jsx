import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Pages/Auth/Login'
import Home from './components/Pages/Home/Home'
import Index from './components/Pages/Index'
import Profile from './components/Pages/Home/Profile'
import Navbar from './components/Layaouts/Navbar'

function App() {
  return (
    
      <BrowserRouter>
      <Navbar />
        <Routes>
          
          <Route path="/" element={<Index />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </BrowserRouter>
 
  )
}

export default App

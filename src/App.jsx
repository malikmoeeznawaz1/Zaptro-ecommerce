import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import Navbar from './Components/Navbar'
import axios from 'axios'

const App = () => {
  const[location, setLocation] = useState()

  const getLocation = async() => {
    navigator.geolocation.getCurrentPosition(async pos => {
      const {latitude, longitude} = pos.coords;

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
      
      try {
        const location = await axios.get(url.trim());        
        const exactLocation = location.data.address;

        setLocation(exactLocation);
      } catch (error) {
        console.log(error);
        
      }
    })
  } 

  useEffect(()=> {
    getLocation();
  },[])

  return (
    <BrowserRouter>
    <Navbar location={location} />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
import React, { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Package from './components/Package/Package'
import Contact from './components/Contact/Contact'
import Navbar from './components/parts/Navbar'
import Footer from './components/parts/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const HomePage = () => {
  
  return (
  <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/package' element={<Package/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>    
  </>
  )

}

export default HomePage
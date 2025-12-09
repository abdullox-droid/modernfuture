import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import App from './App.jsx'
import AboutUs from './AboutUs.jsx'
import Products from './Products.jsx'
import Contacts from './Contacts.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
  </StrictMode>,
)
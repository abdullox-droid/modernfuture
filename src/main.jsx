import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import { App } from './App.jsx'
import AboutUs from './AboutUs.jsx'
import Products from './Products.jsx'
import Contacts from './Contacts.jsx'

function MainApp() {
  const [bagCount, setBagCount] = useState(0)

  const addToBag = () => {
    setBagCount(bagCount + 1)
  }

  return (
    <StrictMode>
      <BrowserRouter>
        <Navbar bagCount={bagCount} />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/products' element={<Products onAddToBag={addToBag} />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')).render(
  <MainApp />
)
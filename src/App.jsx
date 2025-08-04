import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Nabvar'
import Footer from "./Components/Footer"
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import UseStateHook from './hooks/UseStateHook'
import UseEffectHook from './hooks/UseEffectHook'
import UseReducerHook from './hooks/UseReducerHook'
import UseRefHook from './hooks/UseRefHook'
import UseIdHook from './hooks/UseIdHook'




import './App.css'

function App() {
 
  const NavData = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'Services', link: '/services' },
    { id: 3, name: 'Contact', link: '/contact' },
    { id: 4, name: 'UseStateHook', link: '/use-state-hook' },
    {id: 5, name: 'UseEffectHook', link: '/use-effect-hook' },
    { id: 6, name: 'UseReducerHook', link: '/use-reducer-hook' },
    { id: 8, name: 'UseRefHook', link: '/use-ref-hook' } ,
    { id: 9, name: 'UseIdHook', link: '/use-id-hook' }
  ]


  return (
    <>
      
      <Router>
        <Navbar navData={NavData} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/use-state-hook" element={<UseStateHook />} /> 
          <Route path="/use-effect-hook" element={<UseEffectHook />} />
          <Route path="/use-reducer-hook" element={<UseReducerHook />} />
          <Route path="/use-ref-hook" element={<UseRefHook />} />
          <Route path="/use-id-hook" element={<UseIdHook />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App

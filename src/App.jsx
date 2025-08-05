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
import UseMemoHook from './hooks/MemoHooks/UseMemoHook'
import UseActionHook from './hooks/UseActionHook'
import ReactMemo from './hooks/MemoHooks/ReactMemo'
import ContextDataUser from './hooks/ContentApi/ContextDataUser'
import FetchProducts from './Apis/FetchDataApi'
import AxiosProducts from './Apis/AxiosDataApi'
import ProductDetail from './Params/ProductDetail'  
import ProductList from './QauryParams/ProductList' // Importing the ProductList component


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
    { id: 9, name: 'UseIdHook', link: '/use-id-hook' },
    { id: 10, name: 'UseMemoHook', link: '/use-memo-hook' },
    { id: 11, name: 'UseActionHook', link: '/use-action-hook' },
    {id: 12, name: 'ReactMemo', link: '/react-memo' },
    { id: 13, name: 'ContextDataUser', link: '/context-data-user' },
    { id: 14, name: 'FetchProducts', link: '/fetch-products' },
    { id: 15, name: 'AxiosProducts', link: '/axios-products' },
    { id: 16, name: 'ProductList', link: '/product-list' },


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
          <Route path="/use-memo-hook" element={<UseMemoHook />} />
           <Route path="/use-action-hook" element={<UseActionHook />} />
          <Route path="/react-memo" element={<ReactMemo />} />
          <Route path="/context-data-user" element={<ContextDataUser />} />
          <Route path="/fetch-products" element={<FetchProducts />} />
          <Route path="/axios-products" element={<AxiosProducts />} />
          <Route path="/fetch-products/:id" element={<ProductDetail />} />
          <Route path="/product-list" element={<ProductList />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App

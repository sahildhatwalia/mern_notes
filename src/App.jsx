// import { useState } from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Navbar from './Components/Nabvar'
// import Footer from "./Components/Footer"
// import Home from './Pages/Home'
// import Contact from './Pages/Contact'
// import Services from './Pages/Services'
// import UseStateHook from './hooks/UseStateHook'
// import UseEffectHook from './hooks/UseEffectHook'
// import UseReducerHook from './hooks/UseReducerHook'
// import UseRefHook from './hooks/UseRefHook'
// import UseIdHook from './hooks/UseIdHook'
// import UseMemoHook from './hooks/MemoHooks/UseMemoHook'
// import UseCallBackHook from './hooks/MemoHooks/UseCallBackHook'
// import UseActionHook from './hooks/UseActionHook'
// import ReactMemo from './hooks/MemoHooks/ReactMemo'
// import ContextDataUser from './hooks/ContentApi/ContextDataUser'
// import FetchProducts from './Apis/FetchDataApi'
// import AxiosProducts from './Apis/AxiosDataApi'
// import ProductDetail from './Params/ProductDetail'  
// import ProductList from './QauryParams/ProductList'

// // import Home from "./comp/Home"
// // import Serve from "./comp/Serve"
// // import Shop from "./comp/Shop"
// // import Footer from "./Components/Footer"
// // import Navbar from "./Navbar/Navbar"


// import './App.css'
// import Login from './Navbar/Login'
// import ProtectRouting from './protectrouting'

// function App() {
 
//   const NavData = [
//     { id: 1, name: 'Home', link: '/' },
//     { id: 2, name: 'Services', link: '/services' },
//     { id: 3, name: 'Contact', link: '/contact' },
//     { id: 4, name: 'UseStateHook', link: '/use-state-hook' },
//     {id: 5, name: 'UseEffectHook', link: '/use-effect-hook' },
//     { id: 6, name: 'UseReducerHook', link: '/use-reducer-hook' },
//     { id: 8, name: 'UseRefHook', link: '/use-ref-hook' } ,
//     { id: 9, name: 'UseIdHook', link: '/use-id-hook' },
//      {id: 10, name: 'ReactMemo', link: '/react-memo' },
//     { id: 11, name: 'UseMemoHook', link: '/use-memo-hook' },
//     { id: 12, name: 'UseCallBackHook', link: '/use-callback-hook' },
//     { id: 13, name: 'UseActionHook', link: '/use-action-hook' },
//     { id: 14, name: 'ContextDataUser', link: '/context-data-user' },
//     { id: 15, name: 'FetchProducts', link: '/fetch-products' },
//     { id: 16, name: 'AxiosProducts', link: '/axios-products' },
//     { id: 17, name: 'ProductList', link: '/product-list' },
     


//   ]


//   return (
//     <>
      
//       <Router>
//         <Navbar navData={NavData} />
//         <Routes>
//           <Route path="/" element={ <ProtectRouting><Home /></ProtectRouting>} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/use-state-hook" element={<UseStateHook />} /> 
//           <Route path="/use-effect-hook" element={<UseEffectHook />} />
//           <Route path="/use-reducer-hook" element={<UseReducerHook />} />
//           <Route path="/use-ref-hook" element={<UseRefHook />} />
//           <Route path="/use-id-hook" element={<UseIdHook />} />
//            <Route path="/react-memo" element={<ReactMemo />} />
//           <Route path="/use-memo-hook" element={<UseMemoHook />} />
//           <Route path="/use-callback-hook" element={<UseCallBackHook />} />
//            <Route path="/use-action-hook" element={<UseActionHook />} />
//           <Route path="/context-data-user" element={<ContextDataUser />} />
//           <Route path="/fetch-products" element={<FetchProducts />} />
//           <Route path="/axios-products" element={<AxiosProducts />} />
//           <Route path="/fetch-products/:id" element={<ProductDetail />} />
//           <Route path="/product-list" element={<ProductList />} />
//             <Route path="/login" element={<Login />} />

//         </Routes>
//         <Footer />
//       </Router>
//     </>
//   )
// }

// export default App

import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from "./Navbar/Navbar"
import Home from "./comp/Home"
import Shop from "./comp/Shop"
import Serve from "./comp/Serve"
import Login from "./Navbar/Login"
import Detail from "./Apis/Detail"
import Cart from "./comp/Cart"
const App=()=>{
  return(
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/shop" element={<Shop/>} />
    <Route path="/services" element={<Serve/>}/>

    <Route path="/details/:id" element={<Detail/>}/>
    <Route path="/Login" element={<Login/>}/>
      <Route path="/cart" element={<Cart/>}/>

    
   </Routes>
   {/* <Footer/> */}
   
   </BrowserRouter>
  )
}
export default App
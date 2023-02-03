import React from 'react'
import {Route, Routes} from "react-router-dom"
import Cart from '../Pages/Cart'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import ProductPage from '../Pages/ProductPage'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<ProductPage/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes

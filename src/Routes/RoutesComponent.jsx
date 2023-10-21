import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Detalle from '../pages/Detalle'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'

const RoutesComponent = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/category/:categoryId' element={<Home />}/>
        <Route path='/detalle/:id' element={<Detalle />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/checkout/:orderId' element={<Checkout />}/>
      </Routes>
  )
}

export default RoutesComponent
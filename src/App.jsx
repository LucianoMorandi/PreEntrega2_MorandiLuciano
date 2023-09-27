import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/Items/ItemListContainer'
import ItemDetailContainer from './components/Details/ItemDetailContainer'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Category from './pages/Category'
import Detalle from './pages/Detalle'


const App = () => {

  return (
    <>
    <NavBar/>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/category/:id' element={<Category />}/>
        <Route path='/detalle/:id' element={<Detalle />}/>
      </Routes>
      
      
      
      
    </>
  )
}

export default App

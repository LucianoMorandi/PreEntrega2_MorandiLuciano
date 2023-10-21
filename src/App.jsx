import React from 'react'
import NavBar from './components/NavBar/NavBar'
import CartContextProvider from './context/cartContext/CartContextProvider'
import RoutesComponent from './Routes/RoutesComponent'


const App = () => {

  return (
    <>
    <CartContextProvider>
      
      <NavBar/>

      <RoutesComponent/>
      
    </CartContextProvider>
    </>
  )
}

export default App

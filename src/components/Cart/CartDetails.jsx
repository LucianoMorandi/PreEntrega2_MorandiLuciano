import React, { useContext, useState } from 'react'
import CartContext from '../../context/cartContext/CartContext'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const CartDetails = () => {
    const [orderId, setOrderId] = useState("")
    const { cart, removeItem, clear} = useContext(CartContext)
    const navigate = useNavigate()
    const addToCart = () => {
      const purchase = {
        buyer: {
          id: 1,
          name: "Homero Simpson" ,
          mail: "homerojsimpson@mail.com"
        },
        items: cart,
        date: new Date(),
        total: 1000
      }

      const db = getFirestore();
      const orderCollection = collection(db, "orders")

      addDoc(orderCollection, purchase)
        .then(res => navigate(`/checkout/${res.id}`))
        .catch(err => console.log(err))

      clear();
    }
  return (
    <div>
    
    {
        cart.map( el => (
            <div key={el.item.id}>
                <p>{el.item.name}</p>
                <img className='img-thumbnail' src={el.item.image} alt="" />
                <p>{el.q}</p>
                <button onClick={() => removeItem(el.item.id)}>Eliminar</button>
            </div>
        ))   
    }
    {
        cart.length > 0 &&
        <button className='btn btn-secondary' onClick={addToCart}>Create order</button>
    }
    {/* {
        orderId && 
    } */}
    
    </div>
  )
}

export default CartDetails
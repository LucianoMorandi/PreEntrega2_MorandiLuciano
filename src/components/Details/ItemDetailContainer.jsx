import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ItemDetail from './ItemDetail'
import useFetch from '../Hooks/useFetch'
import CartContext from '../../context/cartContext/CartContext'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
const ItemDetailContainer = ({id}) => {
const { addItem } = useContext(CartContext)
const onAdd = (q) => {
   addItem(item,q)
}  

const [item, setItem] = useState(null);
   useEffect( () => {
    const db = getFirestore()
    
    const itemRef = doc(db, "products", id)
    
    getDoc(itemRef)
      .then((snapshot) => {
        console.log(snapshot.exists())
        if (snapshot.exists()) {
          setItem({
            id: snapshot.id,
            ...snapshot.data()
          })
        }
      })
      .catch((err) => console.log(err))

   }, [])
    
    
    return (
    <>
    {
        item !== null && 
        <ItemDetail item={item} onAdd={onAdd} />
    }    
    </>
  )
}

ItemDetailContainer.propTypes = {
  id: PropTypes.string.isRequired
}

export default ItemDetailContainer
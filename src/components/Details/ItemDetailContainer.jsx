import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import useFetch from '../Hooks/useFetch'

const ItemDetailContainer = ({id}) => {
    const [item] = useFetch(`https://hp-api.onrender.com/api/character/${id}`)
    
    return (
    <>
    {
        item !== null && 
        <ItemDetail item={item}/>
    }    
    </>
  )
}

export default ItemDetailContainer
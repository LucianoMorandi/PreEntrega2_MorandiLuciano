import React from 'react'
import { useParams } from 'react-router-dom'
import ItemListContainer from '../components/Items/ItemListContainer'

const Category = () => {
  const {id} = useParams()
  console.log(id)
  return (
    <>
    <ItemListContainer category={id}/>
    </>
  )
}

export default Category
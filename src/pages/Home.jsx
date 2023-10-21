import React from 'react'
import ItemListContainer from '../components/Items/ItemListContainer'
import { useParams } from 'react-router-dom'

const Home = () => {
  const {category} = useParams()
  return (
    <>
    <ItemListContainer categoryId={category}/>
    </>
  )
}

export default Home
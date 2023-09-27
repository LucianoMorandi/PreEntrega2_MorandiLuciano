import React from 'react'
import { Col } from 'react-bootstrap'
import CardList from './CardList'

const ItemList = ({items}) => {
  return (
    <>
    {
      items.map( (item) => (
        <Col md={4} lg={3} xs={12} key={item.id} category={item.category}>
          <CardList item={item}/>
        </Col>
      ))
    }
    </>
  )
}


export default ItemList
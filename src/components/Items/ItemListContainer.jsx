import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';
import useFetch from '../Hooks/useFetch';

const ItemListContainer = ({category}) => {
  if (category) {
    const [items] = useFetch(`https://hp-api.onrender.com/api/characters/house/${category}`)
    return (
      <Container>
          <Row>
              {
                  items !== null && 
                  <ItemList items={items}/>
              }
          </Row>
      </Container>
    )
  } else {
    const [items] = useFetch('https://hp-api.onrender.com/api/characters')
    return (
      <Container>
          <Row>
              {
                  items !== null && 
                  <ItemList items={items}/>
              }
          </Row>
      </Container>
    )
  }
  
  
}

export default ItemListContainer
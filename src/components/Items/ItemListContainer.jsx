import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';
import useFetch from '../Hooks/useFetch';
import { collection, getDocs, getFirestore } from 'firebase/firestore'
const ItemListContainer = ({category}) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const db = getFirestore()

    const itemCollection = collection(db, "products")

    getDocs(itemCollection)
      .then(snapshot => {
        const allData = snapshot.docs.map(document => ({
          id: document.id,
          ...document.data()
        }))
        setItems(allData)
        console.log(allData)
      })
  }, [])
  

return (
      <Container>
          <Row>
              {
                  items.length > 0 && 
                  <ItemList items={items}/>
              }
          </Row>
      </Container>
    )
}

// ItemListContainer.propTypes = {
//   category: PropTypes.string.isRequired
// }

export default ItemListContainer
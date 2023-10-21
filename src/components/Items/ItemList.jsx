import React from 'react'
import PropTypes from 'prop-types'
import { Col } from 'react-bootstrap'
import CardList from './CardList'
import './ItemList.css'

const ItemList = ({items}) => {
  return (
    <>
    {
      items.map( (item) => (
        <Col className='product-container' key={item.id} categoryId={item.category}>
          <CardList item={item}/>
        </Col>
      ))
    }
    </>
  )
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired
}

export default ItemList
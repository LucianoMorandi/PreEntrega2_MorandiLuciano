import React from 'react'
import PropTypes from 'prop-types'
import Counter from '../Counter/Counter'

const ItemDetail = ({item, onAdd}) => {
  console.log(item)
  return (
    <div>
        <h5>{item.name}</h5>
        <img src={item.image} alt="" />
        <p>
           {item.description}
        </p>
        <p>
            Precio: ${item.price}
        </p>
        
        <Counter onAdd={onAdd} />
    </div>
  )
}

ItemDetail.propTypes = {
    item: PropTypes.object.isRequired,
    onAdd: PropTypes.func.isRequired
}

export default ItemDetail
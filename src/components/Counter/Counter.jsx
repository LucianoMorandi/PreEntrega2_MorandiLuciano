import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

const Counter = ({onAdd}) => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
  return (
    <>
    <Button onClick={increment}>Agregar</Button>
    <span>{count}</span>
    <Button onClick={decrement}>Quitar</Button>
    <Button onClick={() => onAdd(count)}>Agregar al carrito</Button>
    </>
  )
}

Counter.propTypes = {
  onAdd: PropTypes.func.isRequired
}

export default Counter
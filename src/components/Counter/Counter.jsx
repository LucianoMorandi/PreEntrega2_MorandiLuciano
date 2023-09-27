import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Counter = () => {
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
    </>
  )
}

export default Counter
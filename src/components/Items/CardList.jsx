import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Counter from '../Counter/Counter'
import { Link } from 'react-router-dom'

const CardList = ({item}) => {
    return(
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                {item.house}
              </Card.Text>
              <Card.Text>
                {item.actor}
              </Card.Text>
              <Link to={`/detalle/${item.id}`}>
              <Button variant="primary">Mas info</Button>
              </Link>
              
            </Card.Body>
            {/* <Counter/> */}
          </Card>
    )
  }

export default CardList
import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Counter from '../Counter/Counter'
import { Link } from 'react-router-dom'
import './CardList.css'

const CardList = ({item}) => {
    return(
                    <div className="product">
                        <figure>
                            <img src={item.image} alt="producto" />
                        </figure>
                        <div className="info-product">
                            <h2>{item.name}</h2>
                            <p className="price">${item.price}</p>
                            <Link to={`/detalle/${item.id}`}>
                              <Button variant="warning">Details</Button>
                            </Link>
                        </div>
                    </div>
    )
  }

CardList.propTypes = {
  item: PropTypes.object.isRequired
}

export default CardList
import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Product({ product }) {
  return (
    <Card className='my-3 p-3 rounded bg-light'>
        <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} />
        </Link>

        <Card.Body>
            <Link to={`/product/${product._id}`} style={{textDecoration: 'none'}}>
                <Card.Title as='div'> 
                    <strong>{product.name}</strong>
                </Card.Title>
            </Link>

            <Card.Text as='div'> 
                <div className='my-3'>
                    <Rating value={product.rating} text={` ${product.numReviews} reviews`} color='#FFC107' />
                </div>
            </Card.Text>


            <Card.Text as='h3'>
                ${product.price}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product

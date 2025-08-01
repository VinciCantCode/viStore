import React, { useState, useEffect } from 'react'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'
import { useParams } from 'react-router-dom'
import axios from 'axios'



function ProductScreen() {
  const [product, setProduct] = useState({})
  const { id } = useParams()
  useEffect(() => {
    async function fetchProduct() {
      const { data } = await axios.get(`/api/products/${id}`)
      setProduct(data)
    }
    fetchProduct()
  }, [id])

  return (
    <div>
      <Link to='/' className='btn btn-light my-3'>Go back</Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating value={product.rating} text={` ${product.numReviews} reviews`} color='#FFC107' />
            </ListGroup.Item>

            <ListGroup.Item>
              <h3>${product.price}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              Description:  {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Button className='btn-block' disabled={product.countInStock === 0} type='button'>Add to Cart</Button>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>


      </Row>
    </div>
  )
}

export default ProductScreen
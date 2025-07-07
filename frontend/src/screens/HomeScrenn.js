import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import products from '../products'
import Product from '../components/Product'
import axios from 'axios'

const HomeScrenn = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get('/api/products')
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <div>
      <h1>Lastest Products</h1>
      <Row>
        {products.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>

        ))}
      </Row>
    </div>
  )
}


return <button onClick={() => { throw new Error("This is your first error!"); }}>Break the world</button>;



export default HomeScrenn
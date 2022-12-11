import React from 'react'
import Product from './Product'
import './product.scss'

const Products = () => {
  return (
    <section id='product1' className='section-p1'>
        <h2>Check these out</h2>
        <div className="pro-container">
          <Product />
          <Product />
          <Product />
          <Product />   
          <Product />
          <Product />
          <Product />
          <Product />       
        </div>
    </section>
  )
}

export default Products
import React from 'react'
import Product from './Product'
import './product.scss'

const Products = ({products, h2}) => {
  return (
    <section id='product1' className='section-p1'>
        <h2>{h2}</h2>
        <div className="pro-container">
          {products?.length !== 0 ? products?.map((pro, index) => <Product key={index} data={pro} />) : null}       
        </div>
    </section>
  )
}

export default Products
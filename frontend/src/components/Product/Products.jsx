import React, {useState, useEffect} from 'react'
import Product from './Product'
import './product.scss'
import axiosInstance from '../../axios/axios'

const Products = ({number}) => {
  const [state, setState] = useState({
    products: []
  });

  const {products} = state;

  useEffect(() => {
    axiosInstance.get(`/${number}`)
    .then((res)=> res.status === 200 ? setState(state => ({...state, products: res.data})) : [])
    .catch((error)=> console.log(error))
  }, [])

  return (
    <section id='product1' className='section-p1'>
        <h2>Check these out</h2>
        <div className="pro-container">
          {products.length !== 0 ? products.map((pro, index) => <Product key={index} data={pro} />) : null}       
        </div>
    </section>
  )
}

export default Products
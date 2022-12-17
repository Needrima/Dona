import React, {useState, useEffect} from 'react'
import Footer from '../Footer/Footer'
import Newsletter from '../NewsLetter/Newsletter'
import Products from '../Product/Products'
import Hero from './Hero'
import './shop.scss'
import {productAxiosInstance} from '../../axios/axios'

const ShopLayout = () => {
  const [state, setState] = useState({
    products: []
  });

  const {products} = state;

  useEffect(() => {
    getProducts('8')
  }, [])

  const getProducts = (number) => {
    productAxiosInstance.get(`/${number}`)
    .then((res)=> res.status === 200 ? setState(state => ({...state, products: res.data})) : [])
    .catch((error)=> console.log(error))
  }

  return (
    <>
      <Hero />
      <Products products={products} h2="Checkout our cool collection" />
      <Newsletter />
      <Footer />
    </>
  )
}

export default ShopLayout
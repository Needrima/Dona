import React, {useEffect, useContext} from 'react'
import Footer from '../Footer/Footer'
import Newsletter from '../NewsLetter/Newsletter'
import Products from '../Product/Products'
import Hero from './Hero'
// import './shop.scss'
import Pagination from './Pagination/Pagination'
import { ShopContext } from '../../pages/Shop'

const ShopLayout = () => {
  const {products, getProducts} = useContext(ShopContext)

  useEffect(() => {
    getProducts('8')
  }, [])

  return (
    <>
      <Hero />
      <Products products={products} h2="Checkout our cool collection" />
      <Pagination />
      <Newsletter />
      <Footer />
    </>
  )
}

export default ShopLayout
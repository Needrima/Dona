import React, {useEffect} from 'react'
import Footer from '../Footer/Footer'
import Newsletter from '../NewsLetter/Newsletter'
import Products from '../Product/Products'
import Hero from './Hero'
import './shop.scss'
import Pagination from '../Pagination/Pagination'
import { useContext } from 'react'
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
      <Pagination clickFunc={getProducts}/>
      <Newsletter />
      <Footer />
    </>
  )
}

export default ShopLayout
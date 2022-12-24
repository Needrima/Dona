import React, {useEffect} from 'react'
import { useContext } from 'react'
import { HomeContext } from '../../pages/Home'
import Adverts from '../Adverts/Adverts'
import Footer from '../Footer/Footer'
import Newsletter from '../NewsLetter/Newsletter'
import Products from '../Product/Products'
import Hero from './Hero'
// import './home.scss'

const HomeLayout = () => {
  const {products, getProducts} = useContext(HomeContext)

  useEffect(() => {
    getProducts('4')
  }, [])

  return (
    <>
      <Hero />
      <Products products={products} h2="Check these out" />
      <Adverts />
      <Newsletter />
      <Footer />
    </>
  )
}

export default HomeLayout
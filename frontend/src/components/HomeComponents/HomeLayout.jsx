import React from 'react'
import Adverts from '../Adverts/Adverts'
import Footer from '../Footer/Footer'
import Newsletter from '../NewsLetter/Newsletter'
import Products from '../Product/Products'
import Hero from './Hero'
import './home.scss'

const HomeLayout = () => {
  return (
    <>
      <Hero />
      <Products number="4" />
      <Adverts />
      <Newsletter />
      <Footer />
    </>
  )
}

export default HomeLayout
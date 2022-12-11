import React from 'react'
import Products from '../Product/Products'
import Hero from './Hero'
import './home.scss'

const HomeLayout = () => {
  return (
    <>
      <Hero />
      <Products />
    </>
  )
}

export default HomeLayout
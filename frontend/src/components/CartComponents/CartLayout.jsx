import React from 'react'
import Footer from '../Footer/Footer'
import CartAdd from './CartAdd/CartAdd'
import CartItems from './CartItems/CartItems'
import Hero from './Hero'

const CartLayout = () => {
  return (
    <>
        <Hero />
        <CartItems />
        <CartAdd />
        <Footer />
    </>
  )
}

export default CartLayout
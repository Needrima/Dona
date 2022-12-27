import React from 'react'
import Layout from '../components/Layout/Layout'
import CartLayout from '../components/CartComponents/CartLayout'

const Cart = () => {
  const cart_items = localStorage.getItem('dona-cart-items');
  console.log(cart_items);
  
  return (
    <Layout>
        <CartLayout />
    </Layout>
  )
}

export default Cart
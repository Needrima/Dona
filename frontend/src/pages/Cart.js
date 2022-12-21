import React from 'react'
import Layout from '../components/Layout/Layout'

const Cart = () => {
  const cart_items = localStorage.getItem('dona-cart-items');
  console.log(cart_items);
  
  return (
    <Layout>
        <div>Cart</div>
    </Layout>
  )
}

export default Cart
import React, { useContext } from 'react'
import { AppContext } from '../App';
import CheckoutLayout from '../components/CheckoutComponents/CheckoutLayout';
import Layout from '../components/Layout/Layout';

const Checkout = () => {
  const {cartItems} = useContext(AppContext);
  if (!cartItems || cartItems.length === 0) {
    window.location.href = '/cart'
  }
  
  return (
    <Layout>
      <CheckoutLayout />
    </Layout>
  )
}

export default Checkout
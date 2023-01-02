import React, { useContext } from 'react'
import { AppContext } from '../App';
import { productAxiosInstance } from '../axios/axios';
import CheckoutLayout from '../components/CheckoutComponents/CheckoutLayout';
import Layout from '../components/Layout/Layout';

export const CheckoutContext = React.createContext();
const Checkout = () => {
  const {cartItems, cartSubtotal} = useContext(AppContext);
  if (!cartItems || cartItems.length === 0) {
    window.location.href = '/cart'
  }

  const placeOrder = (deliveryInfo) => {
    let orderDetails = {cartItems, cartSubtotal, deliveryInfo}
    productAxiosInstance.post('/order', orderDetails)
    .then(res => {
      console.log(res.data)
      window.localStorage.setItem('dona-cart-items', JSON.stringify([]))
    })
    .catch(err => console.info(err))
  }
  
  return (
    <Layout>
      <CheckoutContext.Provider value={{
        placeOrder
      }}>
        <CheckoutLayout />
      </CheckoutContext.Provider>
    </Layout>
  )
}

export default Checkout
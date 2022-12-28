import React, {useEffect, useState} from 'react'
import Layout from '../components/Layout/Layout'
import CartLayout from '../components/CartComponents/CartLayout'
import { productAxiosInstance } from '../axios/axios'

const Cart = () => {
  const [state, setState] = useState({
    cartItems: [],
  })

  useEffect(() => {
    const cart_items = JSON.parse(window.localStorage.getItem('dona-cart-items'))
    if (cart_items !== null && cart_items.length !== 0) {
      const ids = []
      cart_items.forEach(item => ids.push(item.id))

      productAxiosInstance.post('/cart-items', ids)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
      setState(state => ({...state, cartItems: cart_items}))
    }
  }, [])
  
  return (
    <Layout>
        <CartLayout />
    </Layout>
  )
}

export default Cart
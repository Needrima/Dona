import React, {useContext, useEffect} from 'react'
import Layout from '../components/Layout/Layout'
import CartLayout from '../components/CartComponents/CartLayout'
import { productAxiosInstance } from '../axios/axios'
import { AppContext } from '../App'

const Cart = () => {
  const {cartItems, changeCartItems} = useContext(AppContext);

  useEffect(() => {
    (async () => {
      if (cartItems !== null && cartItems.length !== 0) {
        const ids = []
        cartItems.forEach(item => ids.push(item.id))

        const res = await productAxiosInstance.post('/cart-items', ids)
        const data = res.data
        cartItems.forEach((item, index) => {
          item['img_names'] = data[index]['img_names']
          item['name'] = data[index]['name']
          item['price'] = data[index]['price']
          item['sizes'] = data[index]['sizes']
          item['subtotal'] = item['price'] * item['quantity']
        })

        changeCartItems(cartItems)
      }
    })()
  }, [cartItems])
  
  return (
    <Layout>
        <CartLayout />
    </Layout>
  )
}

export default Cart
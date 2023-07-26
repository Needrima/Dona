import React, {useContext, useEffect} from 'react'
import Layout from '../components/Layout/Layout'
import CartLayout from '../components/CartComponents/CartLayout'
import axiosInstance from '../axios/axios'
import { AppContext } from '../App'
import { useNavigate } from 'react-router'

const Cart = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Jamo | Cart"
  })

  const {changeCartItems, setCartSubtotal} = useContext(AppContext);
  const cart_items = JSON.parse(window.localStorage.getItem('Jamo-cart-items'))

  useEffect(() => {
    if (!cart_items || cart_items?.length === 0) {
      return
    }

    (async () => {
      const ids = []
      cart_items.forEach(item => ids.push(item.id))

      try {
        const res = await axiosInstance.post('product/cart-items', ids)
        const {data} = res;
        cart_items.forEach((item, index) => {
          item['img_names'] = data[index]['img_names']
          item['name'] = data[index]['name']
          item['price'] = data[index]['price']
          item['colours'] = data[index]['colours']
          item['sizes'] = data[index]['sizes']
          item['subtotal'] = item['price'] * item['quantity']
        })

        changeCartItems(cart_items);
        setCartSubtotal(cart_items);
      }catch(error) {
        console.log('getting items in cart:', error)
      }
    })()
  }, [])
  
  return (
    <Layout>
        <CartLayout />
    </Layout>
  )
}

export default Cart
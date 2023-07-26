import React from 'react'
import './cartitem.scss'
import CartItem from './CartItem'
import { useContext } from 'react'
import { AppContext } from '../../../App'

const CartItems = () => {
  const {cartItems} = useContext(AppContext);

  return (
    <section id="cart" className="section-p1">
     <table width='100%'>
        <thead>
            <tr>
                <td>Remove</td>
                <td>Image</td>
                <td>Name</td>
                <td>Price</td>
                <td>Size</td> 
                <td>Colour</td>
                <td>Quantity</td>
                <td>Subtotal</td>
            </tr>
        </thead>

        <tbody>
            {cartItems.length !== 0 ? 
            cartItems.map((item, index) => <CartItem key={index} data={item} />) 
            : 
            <tr>
              <td></td>
              <td></td>
              <td style={{fontWeight:'bolder'}}>No</td>
              <td style={{fontWeight:'bolder'}}>Item</td>
              <td style={{fontWeight:'bolder'}}>In</td>
              <td style={{fontWeight:'bolder'}}>Cart</td>
              <td></td>
              <td></td>
            </tr>
            }
        </tbody>
     </table>
    </section>
  )
}

export default CartItems
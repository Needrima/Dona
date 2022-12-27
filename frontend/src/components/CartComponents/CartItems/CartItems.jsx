import React from 'react'
import './cartitem.scss'
import CartItem from './CartItem'

const CartItems = () => {
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
                <td>Quantity</td>
                <td>Subtotal</td>
            </tr>
        </thead>

        <tbody>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
        </tbody>
     </table>
    </section>
  )
}

export default CartItems
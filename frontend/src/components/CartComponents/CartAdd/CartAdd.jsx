import React from 'react'
import './cartadd.scss'

const CartAdd = () => {
  return (
    <section id='cart-add' className='section-p1'>
        <div id="coupon">
            <h3>Apply Coupon</h3>
            <div>
                <input type="text" placeholder='Enter Your Coupon' />
                <button>Apply</button>
            </div>
        </div>

        <div id="subtotal">
          <h3>Cart Totals</h3>
          <table>
            <tr>
              <td>Cart Subtotal</td>
              <td>NGN 12000</td>
            </tr>

            <tr>
              <td>Shipping</td>
              <td>NGN1500</td>
            </tr>

            <tr>
              <td><strong>Total</strong></td>
              <td><strong>NGN 13500</strong></td>
            </tr>

          </table>
          <button>Procees to Checkout</button>
        </div>
    </section>
  )
}

export default CartAdd
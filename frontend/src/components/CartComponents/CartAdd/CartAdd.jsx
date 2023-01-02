import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router'
import { AppContext } from '../../../App'
import './cartadd.scss'

const CartAdd = () => {
  const {cartSubtotal} = useContext(AppContext);
  const navigate = useNavigate();
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
            <tbody>
              <tr>
                <td>Cart Subtotal</td>
                <td>NGN {cartSubtotal}</td>
              </tr>

              <tr>
                <td>Shipping</td>
                <td>NGN1500</td>
              </tr>

              <tr>
                <td><strong>Total</strong></td>
                <td><strong>NGN {cartSubtotal + 1500}</strong></td>
              </tr>
            </tbody>
            

          </table>
          <button onClick={() => navigate('/checkout')}>Proceed to checkout</button>
        </div>
    </section>
  )
}

export default CartAdd
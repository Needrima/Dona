import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../App'
import { CheckoutContext } from '../../pages/Checkout'
import './style.scss'

const CheckoutLayout = () => {
    const {placeOrder} = useContext(CheckoutContext);
    const {cartSubtotal} = useContext(AppContext);

    const [state, setState] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        message: '',
      })
    
      const {name, phone, address, email, message} =  state;
    
      const handleFormChange = (e) => {
        setState(state => ({
          ...state,
          [e.target.name]: e.target.value,
        }))
      }
    
      const [btnDisabled, setBtnDisabled] = useState(false);
    
      const proceedToPayment = () => {
        // setBtnDisabled(true);

        // go to payment
        
        let handler = window.PaystackPop.setup({
          key: 'pk_test_0e5f4cfe0f60cbc0b25995c05a75a448b88c1896', // Replace with your public key
          email: email,
          amount: (cartSubtotal + 1500) * 100, // subtotal + delivery fee multiplied by 100 to convert to base currency (kobo)
          ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
          // label: "Optional string that replaces customer email"
          onClose: function(){
            alert('payment unsuccessful, window closed. try later');
            setBtnDisabled(false);
          },
          callback: function(response){
            let message = 'Payment complete! Reference: ' + response.reference;
            alert(message);
            placeOrder(state)
            setBtnDisabled(false);
          }
        });
  
        handler.openIframe();

        setBtnDisabled(false);
    
        setState({
          name: '',
          phone: '',
          email: '',
          address: '',
          message: '',
        })
      }
    
    return (
        <section id="form-details" className='section-p1'>
            <div className='form'>
                <span>Delivery Information</span>
                <input type="text" name="name" value={name} placeholder="Recipient's Name" onChange={handleFormChange} required />
                <input type="text" name="phone" value={phone} placeholder="Recipient's Phone Number" onChange={handleFormChange} required />
                <input type="email" name="email" value={email} placeholder="Recipient's Email Address" onChange={handleFormChange} required />
                <input type="text" name="address" value={address} placeholder="Recipient's Address" onChange={handleFormChange} required />
                <textarea name="message" value={message} cols="30" rows="10" placeholder="Optional Comment" onChange={handleFormChange}></textarea>
                <button onClick={proceedToPayment} disabled={btnDisabled}>Proceed To Payment</button>
            </div>
        </section>
      )
}

export default CheckoutLayout
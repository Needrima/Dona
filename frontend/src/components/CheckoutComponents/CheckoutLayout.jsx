import React, { useState } from 'react'
import './style.scss'

const CheckoutLayout = () => {
    const [state, setState] = useState({
        name: '',
        phone: '',
        address: '',
        message: '',
      })
    
      const {name, phone, address, message} =  state;
    
      const handleFormChange = (e) => {
        setState(state => ({
          ...state,
          [e.target.name]: e.target.value,
        }))
      }
    
      const [btnDisabled, setBtnDisabled] = useState(false);
    
      const sendMessage = () => {
        setBtnDisabled(true);

        console.log(state)

        setBtnDisabled(false);
    
        setState({
          name: '',
          phone: '',
          address: '',
          message: '',
        })
      }
    
    return (
        <section id="form-details" className='section-p1'>
            <div className='form'>
                <span>Delivery Information</span>
                <input type="text" name="name" value={name} placeholder="Recipient's Name" onChange={handleFormChange} />
                <input type="text" name="phone" value={phone} placeholder="Recipient's Phone Number" onChange={handleFormChange} />
                <input type="text" name="address" value={address} placeholder="Recipient's Address" onChange={handleFormChange} />
                <textarea name="message" value={message} cols="30" rows="10" placeholder="Optional Comment" onChange={handleFormChange}></textarea>
                <button onClick={sendMessage} disabled={btnDisabled}>Proceed To Payment</button>
            </div>
        </section>
      )
}

export default CheckoutLayout
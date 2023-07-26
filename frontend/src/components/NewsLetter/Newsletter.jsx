import React, { useState } from 'react'
import axiosInstance from '../../axios/axios'
import './newsletter.scss'

const Newsletter = () => {
  const [emailAddr, setEmailAddr] = useState({
    email: ''
  })
  const {email} = emailAddr;

  const [btnDisabled, setBtnDisabled] = useState(false)

  const subscribe = () => {
    setBtnDisabled(true);
    axiosInstance.post('customer/subscribe', emailAddr)
    .then(res => {
      if (res.status === 200) {
        alert('subscription successful')
      }      
      setBtnDisabled(false);
    })
    .catch(err => {
      alert(err.response.data.error)
      setBtnDisabled(false);
    })

    setEmailAddr({email: ''})
  }
  
  return (
    <section id="newsletter" className='section-p1 section-m1 '>
      <div className="newstext">
        <h4>Sign Up For Newsletter</h4>
        <p>Get E-mail updates about out latest shop and <span>special offers.</span></p>
      </div>

      <div className="form">
        <input type="text" value={email} placeholder='Enter your email address' onChange={(e) => setEmailAddr({email: e.target.value})} />
        <button disabled={btnDisabled} onClick={subscribe}>Sign Up</button>
      </div>
    </section>
  )
}

export default Newsletter
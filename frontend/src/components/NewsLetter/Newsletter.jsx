import React, { useState } from 'react'
import {customerAxiosInstance} from '../../axios/axios'
import './newsletter.scss'

const Newsletter = () => {
  const [email, setEmail] = useState({
    email: ''
  })

  const subscribe = () => {
    customerAxiosInstance.post('/subscribe', email)
    .then(res => {if (res.status === 200) alert('subscription successful')})
    .catch(err => {
      alert(err.response.data['error'])
    })
  }
  
  return (
    <section id="newsletter" className='section-p1 section-m1 '>
      <div className="newstext">
        <h4>Sign Up For Newsletter</h4>
        <p>Get E-mail updates about out latest shop and <span>special offers.</span></p>
      </div>

      <div className="form">
        <input type="text" placeholder='Enter your email address' onChange={(e) => setEmail({email: e.target.value})} />
        <button onClick={subscribe}>Sign Up</button>
      </div>
    </section>
  )
}

export default Newsletter
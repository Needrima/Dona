import React, {useState} from 'react'
import './style.scss'
import { customerAxiosInstance } from '../../../axios/axios'

const ContactForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleFormChange = (e) => {
    setState(state => ({
      ...state,
      [e.target.name]: e.target.value,
    }))
  }

  const [btnDisabled, setBtnDisabled] = useState(false);

  const sendMessage = (e) => {
    e.preventDefault();
    setBtnDisabled(true)
    customerAxiosInstance.post('/send-contact-mail', state)
    .then(res => {
      if (res.status === 200) {
        alert('message sent')
      }
      setBtnDisabled(false)
    })
    .catch(err => {
      alert(err.response.data['error'])
      setBtnDisabled(false)
    })
  }

  return (
    <section id="form-details" className='section-p1'>
        <div className='form'>
            <span>Leave us a message</span>
            <input type="text" name="name" id="" placeholder='Your Name' onChange={handleFormChange} />
            <input type="email" name="email" id="" placeholder='E-mail' onChange={handleFormChange} />
            <textarea name="message" id="" cols="30" rows="10" placeholder='Your Message' onChange={handleFormChange}></textarea>
            <button onClick={sendMessage} disabled={btnDisabled}>Send Message</button>
        </div>
    </section>
  )
}

export default ContactForm
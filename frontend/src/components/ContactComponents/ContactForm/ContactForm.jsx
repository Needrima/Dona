import React from 'react'
import './style.scss'

const ContactForm = () => {
  return (
    <section id="form-details" className='section-p1'>
        <form>
            <span>Leave us a message</span>
            <input type="text" name="" id="" placeholder='Your Name' />
            <input type="text" name="" id="" placeholder='E-mail' />
            <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
            <button>Send Message</button>
        </form>
    </section>
  )
}

export default ContactForm
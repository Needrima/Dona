import React from 'react'
import Footer from '../Footer/Footer'
import Newsletter from '../NewsLetter/Newsletter'
import ContactForm from './ContactForm/ContactForm'
import ContactSection from './ContactSection/ContactSection'
import Hero from './Hero'

const ContactLayout = () => {
  return (
    <>
        <Hero />
        <ContactSection />
        <ContactForm />
        <Newsletter />
        <Footer />
    </>
  )
}

export default ContactLayout
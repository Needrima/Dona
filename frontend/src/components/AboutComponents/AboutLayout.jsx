import React from 'react'
import './about.scss'
import Footer from '../Footer/Footer'
import Newsletter from '../NewsLetter/Newsletter'
import Hero from './Hero'

const AboutLayout = () => {
  return (
    <>
        <Hero />
        <Newsletter />
        <Footer />
    </>
  )
}

export default AboutLayout
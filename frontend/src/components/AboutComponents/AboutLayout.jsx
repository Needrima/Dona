import React from 'react'
import Footer from '../Footer/Footer'
import Newsletter from '../NewsLetter/Newsletter'
import AboutSection from './AboutSection/AboutSection'
import Hero from './Hero'

const AboutLayout = () => {
  return (
    <>
        <Hero />
        <AboutSection />
        <Newsletter />
        <Footer />
    </>
  )
}

export default AboutLayout
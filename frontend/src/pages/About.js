import React, { useEffect } from 'react'
import AboutLayout from '../components/AboutComponents/AboutLayout'
import Layout from '../components/Layout/Layout'

const About = () => {
  useEffect(() => {
    document.title = "Jamo | About Us"
  })

  return (
    <Layout>
        <AboutLayout />
    </Layout>
  )
}

export default About
import React, {useEffect} from 'react'
import Layout from '../components/Layout/Layout'
import ContactLayout from '../components/ContactComponents/ContactLayout'

const Contact = () => {
  useEffect(() => {
    document.title = "Jamo | Contact Us"
  })

  return (
    <Layout>
        <ContactLayout />
    </Layout>
  )
}

export default Contact
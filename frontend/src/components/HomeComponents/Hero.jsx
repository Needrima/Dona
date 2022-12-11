import React from 'react'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <section id='hero'>
        <h2>#DONA</h2>
        <h4>For all your plain T-shirts</h4>
        <Link to='/shop'><button>Start Shopping</button></Link>
    </section>
  )
}

export default Hero
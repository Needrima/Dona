import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

const TermsAndConditions = ({setShowTandC}) => {
  return (
    <div id='delivery-info'>
        <div className='header'>
            <span>Terms And Conditions</span>
            <span onClick={() => setShowTandC(false)}>X</span>
        </div>

        <ul>
            <li>After succesfully placing an order.</li>
            <li>You get an email for order confrimation with a tracking ID for your delivery.</li>
            <li>Usually delivery takes not more than 48 working hours but due to logisitics depending on your location it can take more.</li>
            <li>Please make sure you check that the delivery address and recipient's phone number for the delivery are correct before placing an order.</li>
            <li>Please contact us if you have for complaints and more from our <Link to='/contact'>contact page</Link>.</li>
        </ul>
    </div>
  )
}

export default TermsAndConditions
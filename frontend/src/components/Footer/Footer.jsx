import React, { useState } from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'
import GooglePlay from '../../assets/images/static/google-play.jpg'
import AppStore from '../../assets/images/static/app-store.jpg'
import DebitCards from '../../assets/images/static/debit-cards.png'
import DeliveryInfo from './DeliveryInfo/DeliveryInfo'
import TermsAndConditions from './T&C/TermsAndConditions'

const Footer = () => {
    const getYear = () => {
        const date = new Date()
        return date.getFullYear()
    }

    const [state, setState] = useState({
        showDelInfo: false,
        showTandC: false,
    })

    const {showDelInfo, showTandC} = state;

    const setDelInfo = (val) => {
        setState(state => ({
            ...state, 
            showDelInfo: val
        }))
    }

    const setShowTandC = (val) => {
        setState(state => ({
            ...state, 
            showTandC: val
        }))
    }
        
  return (
    <footer className='section-p1'>
        <div className="col">
            <Link to='#' className='logo'>Dona</Link>
            <h4>Contact</h4>
            <p><strong>Email:</strong> customerservice@dona.com</p>
            <p><strong>Phone:</strong> +234 81 056 582 03</p>
            <p><strong>Hours:</strong> 9:00 - 19:00 MON - SAT</p>

            <div className='follow'>
                <h4>Follow us</h4>
                <div className='icon'>
                    <a href='https://facebook.com'><i className="fab fa-facebook-f"></i></a>
                    <a href='https://twitter.com'><i className="fab fa-twitter"></i></a>
                    <a href='https://instagram.com'><i className="fab fa-instagram"></i></a>
                    <a href='https://youtube.com'><i className="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>

        <div className="col">
            <h4>About</h4>
            <Link to='/about'>About us</Link>
            <span onClick={() => setDelInfo(true)}>Delivery Information</span>
            <span onClick={() => setShowTandC(true)}>Terms & Conditions</span>
            <a href="tel:+234812345678">Contact Us</a>
        </div>

        <div className="col">
            <h4>My Order</h4>
            <Link to='/cart'>View Cart</Link>
        </div>

        <div className="col install">
            <h4>Install App</h4>
            <p>From Google Play or App Store</p>
            <div className="row">
                <img src={GooglePlay} alt="google-play.jpg" />
                <img src={AppStore} alt="app-store.jpg" />
            </div>
            <p>Secured Payment Gateways</p>
            <img src={DebitCards} alt="debit-cards.jpg" />
        </div>

        <div className="copyright">
            <p>&copy; {getYear()} Dona. All rights reserved</p>
        </div>

        {showDelInfo && <DeliveryInfo setDelInfo={setDelInfo} />}
        {showTandC && <TermsAndConditions setShowTandC={setShowTandC} />}
    </footer>
  )
}

export default Footer
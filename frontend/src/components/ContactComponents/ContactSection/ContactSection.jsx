import React from 'react'
import './style.scss'

const ContactSection = () => {
  return (
    <section id="contact-details" className="section-p1">
      <div className="details">
        <span>GET IN TOUCH</span>
        <h2>Contact us today</h2>

        <h3>Head Office</h3>
        <div>
          <li>
            <i className="fal fa-envelope"></i>
            <p>customerservice@jamo.com</p>
          </li>

          <li>
            <i className="fal fa-phone-alt"></i>
            <p>08105658203 (whatsapp too)</p>
          </li>

          <li>
            <i className="fal fa-clock"></i>
            <p>9:00 - 19:00 MON - SAT</p>
          </li>
        </div>
      </div>

      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15856.496531579358!2d3.361695016153482!3d6.505967044317998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c8c358b3f4b%3A0x5552cfbd43df8434!2sYaba%2C%20Oworonshoki%2C%20Lagos!5e0!3m2!1sen!2sng!4v1671880070785!5m2!1sen!2sng" title='location-map' width="600" height="450" style={{border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  )
}

export default ContactSection
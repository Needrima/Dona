import React from 'react'
// import './menubar.scss'
import {NavLink} from 'react-router-dom'

const Menubar = () => {
  return (
    <section id='menu'>
      <div className='logo'>
        <h2>Jamo Admin</h2>
      </div>

      <div className='items'>
        <li><i className='fad fa-chart-pie-alt'></i><NavLink to="/">Dashboard</NavLink></li>
        {/* <li><i className='fab fa-uikit'></i><NavLink to="/">Elements</NavLink></li>
        <li><i className='fas fa-th-large'></i><NavLink to="/">Tables</NavLink></li>
        <li><i className='fas fa-edit'></i><NavLink to="/">Forms</NavLink></li>
        <li><i className='fab fa-cc-visa'></i><NavLink to="/">Cards</NavLink></li>
        <li><i className='fas fa-hamburger'></i><NavLink to="/">Modal</NavLink></li>
        <li><i className='fas fa-chart-line'></i><NavLink to="/">Blank</NavLink></li> */}
      </div>
    </section> 
  )
}

export default Menubar;
import React from 'react'
import './Navbar.scss'
import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <section id='header'>
      <Link to='#' className='logo'>Dona</Link>

      <div>
        <ul id="navbar">
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/shop'>Shop</NavLink></li>
          <li><NavLink to='/blog'>Blog</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
          <li><NavLink to='/cart'><i class="far fa-shopping-cart"></i></NavLink></li>
        </ul>
      </div>
    </section>
  )
}

export default NavBar;
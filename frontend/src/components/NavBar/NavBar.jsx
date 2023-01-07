import React, {useContext, useState} from 'react'
import './Navbar.scss'
import {Link, NavLink} from 'react-router-dom'
import { AppContext } from '../../App'

const NavBar = () => {
  const showMenu = () => {
    const navbar = document.querySelector("#navbar");
    navbar.classList.add('active')
  }

  const hideMenu = () => {
    const navbar = document.querySelector("#navbar");
    navbar.classList.remove('active')
  }

  const {cartItems} = useContext(AppContext);

  const [searchText, setSearchtext] = useState('');

  const displaySearchBox = () => {
    switch (window.location.pathname) {
      case "/" :
        return (
          <div className="search">
            <input type="text" placeholder="Enter anime name" value={searchText} onChange={(e)=> setSearchtext(e.target.value)} />
            <button onClick={search}>search</button>
          </div>
        )
      case "/shop":
        return (
          <div className="search">
            <input type="text" placeholder="Enter anime name" value={searchText} onChange={(e)=> setSearchtext(e.target.value)} />
            <button onClick={search}>search</button>
          </div>
        )
      default:
        return null
    }
  }

  const search = () => {
    alert(searchText)
  }
  
  return (
    <section id='header'>
      <Link to='/' className='logo'>Jamo</Link>
      
      {displaySearchBox()}

      <div>
        <ul id="navbar">
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/shop'>Shop</NavLink></li>
          {/* <li><NavLink to='/blog'>Blog</NavLink></li> */}
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
          <li id='lg-bag'><NavLink to='/cart'><i className="far fa-shopping-cart"></i> {cartItems.length !== 0 ? cartItems.length : ''}</NavLink></li>
          <a href="#" id='close'><i className="far fa-times" onClick={hideMenu}></i></a>
        </ul>
      </div>

      <div id='mobile'>
        <NavLink to='/cart'><i className="far fa-shopping-cart"></i>{cartItems.length !== 0 ? cartItems.length : ''}</NavLink>
        <i id="bar" className='fas fa-outdent' onClick={showMenu}></i>
      </div>
    </section>
  )
}

export default NavBar;
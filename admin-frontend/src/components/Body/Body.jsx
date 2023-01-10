import React from 'react'
import './body.scss'
import adminUser from '../../assets/images/admin-user.jpeg'

const Header = ({children}) => {
    const showMenu = () => {
        const menubar = document.getElementById('menu');
        menubar.classList.toggle('shown');
    }
    
  return (
    <section id='interface'>
        <div className='navigation'>
            <div className='n1'>
                <div><i className="fas fa-bars" id="menu-btn" onClick={showMenu}></i></div>
                <div className='search'>
                    <i className='far fa-search'></i>
                    <input type='text' placeholder='Enter Order ID' />
                </div>
            </div>

            <div className='profile'>
                <i className='far fa-bell'><sup>2</sup></i>
                <img src={adminUser} alt=""/>
            </div>
        </div>

        {children}
    </section>
  )
}

export default Header
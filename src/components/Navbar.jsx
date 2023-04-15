import React, { useState } from 'react'
import logo from '../images/logo.png';
import {link} from 'react-scroll';

function Navbar() {

    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        }
        else {
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
  return (
    <nav className={nav ? 'nav active' : 'nav'}>
        <link to='#' className='logo'>
            <img src={logo} alt="" />
        </link> 
        <input className='menu-btn' type="checkbox" id='menu-btn'/>
        <label className='menu-icon' For="menu-btn">
            <span className="nav-icon"></span>
        </label>
        <ul className="menu">
            <li><link to='#'>Header</link></li>
            <li><link to='#'>Features</link></li>
            <li><link to='#'>Offers</link></li>
            <li><link to='#'>About</link></li>
            <li><link to='#'>Contact</link></li>
        </ul>
    </nav>
  )
}

export default Navbar
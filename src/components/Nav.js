import React from 'react'
import { Link } from 'react-router-dom'

import Logo from './Logo'
import NavLink from './NavLink'
import './Nav.css'

export default ({ handlePopupOpen }) => (
  <nav className='nav'>
    <div className='nav--container container'>
    	<a className='nav--menu-link' href='/'>Menu</a>
        <Logo />
        <a className='button' href='/'>Order Now</a>
    </div>
  </nav>
)

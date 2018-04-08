import React from 'react'
import { Link } from 'react-router-dom'

import Logo from './Logo'
import NavLink from './NavLink'
import './Nav.css'

export default ({ handlePopupOpen }) => (
  <nav className='Nav'>
    <div className='Nav--Container container'>
      <NavLink to='/' exact>
        Menu
      </NavLink>
      <Link to='/'>
        <Logo />
      </Link>
    </div>
  </nav>
)

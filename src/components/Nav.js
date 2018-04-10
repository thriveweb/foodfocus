import React from 'react'
import { Link } from 'react-router-dom'

import Logo from './Logo'
import NavLink from './NavLink'
import './Nav.css'


export default ({ handlePopupOpen, pdfMenu, buttonUrl, buttonText }) => (

	<nav className='nav'>
	 	<div className='nav--container container'>
	   		<a className='nav--menu-link' href={pdfMenu}>Menu</a>
	      	<a href='/'><Logo /></a>
	      	<a className='button' href={`${buttonUrl}`}>{buttonText}</a>
	  	</div>
	</nav> 
)

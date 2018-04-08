import React from 'react'

import './Footer.css'
import LazyImage from './LazyImage'

export default ({content, phone, email, socialMedias }) => (
  <footer className='footer'>
  	<div className='container'>
  		<div className='footer--col-left'>
  			<LazyImage src='/images/uploads/logo.png' imageSize='300' alt='Food Focus Logo' />
  			<p>{content}</p>
  		</div>
  		<div className='footer--col-middle'>
  		    <p>Phone: <a href={`tel:${phone}`}>{phone}</a></p>
  			<p>Email: <a href={`mailto:${email}`}>{email}</a></p>
  			<div className='footer--social-media'>
  				{socialMedias.map(socialMedia => {
  					return <a href={socialMedia.accountUrl}>{socialMedia.icon}</a>
  				})}
  			</div>
  		</div>
  		<div className='footer--col-right'>
  		</div>
  	</div>
    <div className='footer--bottom'>
      <div className='container'>
        <p>© 2018 Copyright Food Focus</p>
        <a href="https://thriveweb.com.au/" title="Web Design Gold Coast" >Web Design Gold Coast</a> - THRIVE
        <nav>
        	<ul>
        		<li><a href='/'>FAQ</a></li>
        		<li><a href='/'>Terms & Conditions</a></li>
        	</ul>	
        </nav>
      </div>
    </div>
  </footer>
)



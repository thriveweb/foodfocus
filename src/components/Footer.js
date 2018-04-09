import React from 'react'

import './Footer.css'
import LazyImage from './LazyImage'
import {ICONTwitter, ICONFacebook, ICONLinkedin, ICONInstagram} from './Icons'
import EnquiryFormSimple from './EnquiryFormSimple'

export default ({content, phone, email, twitter, facebook, linkedin, instagram }) => (
  <footer className='footer'>
  	<div className='container'>
  		<div className='footer--col-left'>
  			<LazyImage src='/images/uploads/logo.png' imageSize='300' alt='Food Focus Logo' />
  			{content ? <p>{content}</p> : ''}
  		</div>
  		<div className='footer--col-middle'>
  		  {phone ? <p>Phone: <a href={`tel:${phone}`}>{phone}</a></p> : ''}
  			{email ? <p>Email: <a href={`mailto:${email}`}>{email}</a></p> : ''}
  			<div className='footer--social-media'>
          {twitter ? <a href={`${twitter}`}><ICONTwitter/></a> : ''}
          {facebook ? <a href={`${facebook}`}><ICONFacebook/></a> : ''}
          {linkedin ? <a href={`${linkedin}`}><ICONLinkedin/></a> : ''}
          {instagram ? <a href={`${instagram}`}><ICONInstagram/></a> : ''}
  			</div>
  		</div>
  		<div className='footer--col-right'>
        <EnquiryFormSimple />
  		</div>
  	</div>
    <div className='footer--bottom'>
      <div className='container'>
        <p>© 2018 Copyright Food Focus</p>
        <p><a href="https://thriveweb.com.au/" title="Web Design Gold Coast" >Web Design Gold Coast</a> - THRIVE</p>
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



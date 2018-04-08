import React from 'react'

import './Footer.css'

export default ({ globalSettings, socialSettings, navLinks }) => (
  <footer className='Footer'>
  	<div className='container'>
  		<div className='footer--col-left'>
  			<img src='/images/uploads/logo.300.png' alt='Food Focus Logo' />
  			<p>{content}</p>
  		</div>
  		<div className='footer--col-middle'>

  		</div>
  	</div>
    <div className='Footer--Lower'>
      <div className='container'>
        <span>© 2018 Copyright Food Focus</span>
        <a href="https://thriveweb.com.au/" title="Web Design Gold Coast" >Web Design Gold Coast</a> - THRIVE
        <nav>
        	<ul>
        		<li><a href='/'></a></li>
        		<li><a href='/'></a></li>
        	</ul>	
        </nav>
      </div>
    </div>
  </footer>
)

  			// <p>Phone: <a href{`tel:${phone}`}>{phone}</a></p>
  			// <p>Email: <a href{`mailto:${email}`}>{email}</a></p>
  			// <div className='footer--social-media'>
  			// 	{socialMedias.map(socialMedia => {
  			// 		return <a href{socialMedia.accountUrl}>{socialMedia.icon}</a>
  			// 	})}
  			// </div>

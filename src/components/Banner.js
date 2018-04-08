import React from 'react'

import BackgroundImage from './BackgroundImage'
import './Banner.css'

export default ({image, heading }) => (

	<section className='section--banner relative' style={{backgroundImage: `url(${image})`}}>
		<BackgroundImage src={image} imageSize='1800' />
		<div className='container relative'>
			<h1>{heading}</h1>
			<div className='section--banner-info'>
			</div>
		</div>
	</section>
)
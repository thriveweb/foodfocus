import React from 'react'

import BackgroundImage from './BackgroundImage'
import './Banner.css'

export default ({image, heading, address, phone}) => (

	<section className='section--banner relative'>
		<BackgroundImage src={image} imageSize='1800' />
		<div className='container relative'>
			<h1>{heading}</h1>
			<div className='section--banner-info'>
				<p>{address}</p>
				<a href={`tel:${phone}`}>{phone}</a>
			</div>
		</div>
	</section>
)
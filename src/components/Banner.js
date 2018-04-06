import React from 'react'

export default ({image, heading, address, phone}) => (

	<section className='section--banner' style={{backgroundImage: `url(${image})`}}>
		<div className='container'>
			<h1>{heading}</h1>
			<div className='section--banner-info'>
				<p>{address}</p>
				<a href={`tel:${phone}`}>{phone}</a>
			</div>
		</div>
	</section>
)
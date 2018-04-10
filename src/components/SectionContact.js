import React from 'react'

import './SectionContact.css'

import ICONtwitter from './Icons'
import GoogleMap from './GoogleMap'

export default ({title, introContent, infoItems, address, latitude, longitude}) => (

	<section className='section--contact'>
		<div className='container'>
			<div className='section--contact-intro'>
				{title ? <h2>{title}</h2> : ''}
				{introContent ? <p className='title-italic'>{introContent}</p> : ''}
			</div>
			<div className='section--contact-info-container'>
				<GoogleMap lat={parseFloat(latitude)} lng={parseFloat(longitude)}/>
				<div className='section--contact-info'>
					<div className='section--contact-info-item location'>
						<h3>Location</h3>
						{address ? <p>{address}</p> : ''}
					</div>
					{infoItems.map(infoItem => {
						return <div key={infoItem.title} className='section--contact-info-item'>
							{infoItem.title ? <h3>{infoItem.title}</h3> : ''}
							{infoItem.content ? <p>{infoItem.content}</p> : ''}
						</div>
					})}
				</div>
			</div>	
		</div>
	</section>
)


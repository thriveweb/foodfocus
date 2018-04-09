import React from 'react'

export default ({title, introContent, infoItems}) => (

	<section className='section--contact'>
		<div className='container'>
			<div className='section--contact-intro'>
				<h2>{title}</h2>
				<p className='title-italic'>{introContent}</p>
			</div>
			<div className='section--contact-info'>
				{infoItems.map(infoItem => {
					return <div key={infoItem.title} className='section--contact-info-item'>
						<h3>{infoItem.title}</h3>
						<p>{infoItem.content}</p>
					</div>
				})}
			</div>
		</div>
	</section>

)
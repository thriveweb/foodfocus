import React from 'react'

export default ({title, introContent, infoItems}) => (

	<section className='section--contact'>
		<div classname='container'>
			<div className='section--contact-intro'>
				<h2>{title}</h2>
				<p>{introContent}</p>
			</div>
			<div className='section--contact-info'>
				{infoItems.map(infoItem => {
					return <div className='section--contact-info-item'>
						<h3>{infoItem.title}</h3>
						<p>{infoItem.content}</p>
					</div>
				})}
			</div>
		</div>
	</section>

)
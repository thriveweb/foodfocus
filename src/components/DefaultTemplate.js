import React from 'react'

import './DefaultTemplate.css'

export default({title, contentSection}) => (
	<section className='section--default-template'>
		<div className='container'>
			<h1>{title}</h1>
			<div className='section--default-template-content'>
				{contentSection.map(content => {
					return<div key={`${content.heading}`} className='section--default-template-content-item'>
						<h3>{content.heading}</h3>
						<p>{content.content}</p>
					</div>
				})}
			</div>
		</div>
	</section>
)


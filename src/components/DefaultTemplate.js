import React from 'react'

export default({title, contentSection}) => (
	<section className='section--default-template'>
		<div className='container'>
			<h1>{title}</h1>
			<div className='section--default-template-content'>

			</div>
		</div>
	</section>
)

				// {contentSection.map(content => {
				// 	return<div className='section--default-template-content-item'>
				// 		<h3>{heading}</h3>
				// 		<p>{content}</p>
				// 	</div>
				// })}